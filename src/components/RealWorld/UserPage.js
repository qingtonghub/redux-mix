import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import zip from 'lodash/zip'

import { loadUser,loadStarred } from '../../actions/realworld'
import Repo from './components/Repo'
import User from './components/User'
import List from './components/List'

const loadData = ({ login, loadUser, loadStarred }) => {
    loadUser(login, [ 'name' ]);
    loadStarred(login)
}


class UserPage extends Component {

    componentDidMount() {
        // console.log(this.props)
        loadData(this.props)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.login !== nextProps.login){
            loadData(nextProps)
        }
    }
    renderRepo = ([ repo, owner ]) => {
        return (
            <Repo repo={repo}
                  owner={owner}
                  key={repo.fullName} />
        )
    }
    handleLoadMoreClick = () => {
        this.props.loadStarred(this.props.login, true)
    }
    render() { 
        const { user, login ,errorMessage} = this.props;
        if (!user && !errorMessage) {
            return <h1><i>Loading {login}{"'s profileee......."}</i></h1>
        }
        const { starredRepos, starredRepoOwners, starredPagination } = this.props
        return (
            <div>
                <User user={user} />
                <List renderItem={this.renderRepo}
                      items={zip(starredRepos, starredRepoOwners)}
                      onLoadMoreClick={this.handleLoadMoreClick}
                      loadingLabel={`Loading ${login}'s starred...`}
                      {...starredPagination}/>
            </div>
        );
    }
}
 
export default withRouter(connect(
    (state,ownProps) => {
        const login = ownProps.match.params.inputValue.toLowerCase();  //inputValue
        
        const { 
            entities: { users, repos },
            pagination: { starredByUser }
        } = state.realWorld

        const starredPagination = starredByUser[login] || { ids: [] };
        const starredRepos = starredPagination.ids.map(id => repos[id]);
        const starredRepoOwners = starredRepos.map(repo => users[repo.owner]);

        return {
            errorMessage: state.realWorld.errorMessage,
            login,
            starredRepos,
            starredRepoOwners,
            starredPagination,
            user: users[login]
        }
    },
    {
        loadUser,
        loadStarred
    }
)(UserPage));