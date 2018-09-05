
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loadRepo, loadStargazers } from '../../actions/realworld'
import Repo from './components/Repo'
import User from './components/User'
import List from './components/List'


const loadData = props => {
    const { fullName } = props
    props.loadRepo(fullName, [ 'description' ])
    props.loadStargazers(fullName)
}
class RepoPage extends Component {
    componentDidMount() {
        loadData(this.props)
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.fullName !== this.props.fullName) {
            loadData(nextProps)
        }
    }
    renderUser(user) {
        return <User user={user} key={user.login} />
    }
    handleLoadMoreClick = () => {

    }
    render() { 
        const { repo, owner, name } = this.props
        if (!repo || !owner) {
            return <h1><i>Loading {name} details...</i></h1>
        }
        const { stargazers, stargazersPagination } = this.props
        return (
            <div>
                <Repo repo={repo} owner={owner} />
                <List renderItem={this.renderUser}
                      items={stargazers}
                      onLoadMoreClick={this.handleLoadMoreClick}
                      loadingLabel={`Loading stargazers of ${name}...`}
                      {...stargazersPagination} />
            </div>
        );
    }
}

export default withRouter(connect(
    (state,ownProps) => {
        const login = ownProps.match.params.login.toLowerCase();
        const name = ownProps.match.params.name.toLowerCase();
        const {
            pagination: { stargazersByRepo },
            entities: { users, repos }
        } = state.realWorld;
        const fullName = `${login}/${name}`;
        const stargazersPagination = stargazersByRepo[fullName] || { ids: [] };
        const stargazers = stargazersPagination.ids.map(id => users[id]);

        return{
            fullName,
            name,
            stargazers,
            stargazersPagination,
            repo: repos[fullName],
            owner: users[login]
        }
    },
    { 
        loadRepo, 
        loadStargazers 
    }
)(RepoPage));   
 