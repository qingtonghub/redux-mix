
import React,{Component} from 'react'
import { connect } from 'react-redux'

import { fetchPostsIfNeeded,invalidateSubreddit,selectSubreddit } from '../../actions/async'
import Picker from './Picker'
import Posts from './Posts'

class Async extends Component {
    componentDidMount() {
        // console.log(this.props);
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    componentWillReceiveProps(nextProps){
        //select change后 nextProps.selectedSubreddit会改变 这应该再次发起fetch
        if(nextProps.selectedSubreddit !== this.props.selectedSubreddit){
            const { dispatch, selectedSubreddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    }
    handleChange = (value) => {
        const { dispatch } = this.props;
        dispatch(selectSubreddit(value));

        //不在这里直接发起请求 在componentWillReceiveProps中比较selectedSubreddit再发起fetch
        //dispatch(fetchPostsIfNeeded(value));
    }
    handleRefreshClick = e => {
        e.preventDefault();
        const { dispatch,selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));   //将didInvalidate设置为true 则action中shouldFetchPosts返回true
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    render() { 
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        // isFetching:false
        // lastUpdated:1534926440196
        // posts:[]
        // selectedSubreddit: "reactjs"
        const date = new Date(lastUpdated);
        const isEmpty = posts.length === 0 
        return (
            <div className="box">
                <h3>Async</h3>
                <Picker value={selectedSubreddit}
                        onChange={this.handleChange}
                        options={[ 'reactjs', 'frontend' ]} />
                <p>
                    {lastUpdated && <span>Last updated at {date.toLocaleDateString()} {date.toLocaleTimeString()}</span>}
                </p>
                <p>{!isFetching && <button onClick={this.handleRefreshClick}>Refresh</button>}</p>
                {isEmpty 
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{ opacity: isFetching ? 0.5 : 1 }} className='post-box'><Posts posts={posts}/></div>}
            </div>
        );
    }
}
 
export default connect(
    state => {
        const { postsBySubreddit, selectedSubreddit } = state.async;
        const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }
        return {
            selectedSubreddit,
            posts,
            isFetching,
            lastUpdated
        }
    }
)(Async);