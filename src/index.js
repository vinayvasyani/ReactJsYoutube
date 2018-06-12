//ES6 : Javascript modules makes code separated. Unless called on import we cant make reference to any variables
import _ from 'lodash';
import React, { Component } from 'react';//core react lib
import ReactDOM from 'react-dom';//to render to DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBpBb91EIC3wDgXKt53Jar-c67ud4OrysA';



/*== Function Based Component ==
const App = function() {
    return (
        <div>
            <SearchBar/>
        </div>
    );    
};
*/

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [],selectedVideo: null };
        
        this.videoSearch('justin beiber');
    }

    videoSearch (term) {
      
        YTSearch({ key: API_KEY, term: term },
                videoResults => {
                    this.setState({ videos: videoResults, selectedVideo: videoResults[0] });
            });

    }    

    render() {

        //makes sure video search is not called within 300ms
        const throttleVideoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 ); 

        return (
            <div>
                <SearchBar onSearchTermChange = { throttleVideoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={ selectedVideo => { this.setState({ selectedVideo }) }}
                />
            </div>
        );
    }
}

//first arg: wrapping around <> makes it an instance. 
//second arg: which part of DOM you want to attact to. 
ReactDOM.render(<App />, document.querySelector('.container'));

