import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCadqanavincU93Qt6Oym5glvUqyU99UzQ";


// Create a new component. This component should produce some HTML.
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    // don't want to show empty videos when user first loads
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // if key and value are the same, then 
      // this.setState({ videos: videos }) == this.setState({ videos })
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    // Debounce -> Takes inner function, and returns a new function
    // that can be called only every 300 milliseconds.
    // You can call it as many times as you want, but it won't run until it hits
    // the 300 milliseconds boundary.  
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        {/* passing a callback function, videoSearch that accepts a term
            as a parameter to call the cb function with that parameter */}
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        {/* passing a callback function as a property to VideoList */}
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
} 

// Take Component's generated HTML and put it on the page (in the DOM)
// ReactDOM.render(App);  // Passing a class 
// Render the component and insert it into the '.container' child that was declared in index.html
ReactDOM.render(<App />, document.querySelector('.container')) // Passing an instance of App.