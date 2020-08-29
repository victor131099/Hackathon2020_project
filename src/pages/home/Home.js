import React, {Component, Fragment} from 'react'
import { Layout, Breadcrumb, Icon, Input} from "antd"
import {withRouter} from "react-router-dom"
import MapContainer from './components/MapContainer'
// import data from "../../data/Data"
import PersonDetail from "./components/PersonDetail"
class Home extends Component{
    
     
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestionuggestions, you're on your own! list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: "",
          clickable: false,
          windowSize: 10, 
          emask_data: []
         
        };
      }
      componentDidMount(){
        fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => this.setState({emask_data:data}))
    }
      // Event fired when the input value is changed
      onChange = e => {
        const  suggestions  = this.state.emask_data;
        const userInput = e.currentTarget.value;
        console.log(suggestions)
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        const suggestedValue=e.currentTarget.value.split('-')[0];
        // console.log("hello  " + suggestedValue)
        // if (this.state.clickable ==true){
        //   localStorage.setItem('userInput', suggestedValue);
        //   console.log("hello")
        //   console.log(suggestedValue)
       
        // }
        // console.log(e.currentTarget.value)
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: suggestedValue,
          clickedInput:""
        });
        
       
      };
    
      // Event fired when the user clicks on a suggestion
      onClick = e => {
        // Update the user input and reset the rest of the state
        
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText.split("-")[0],
          clickedInput: e.currentTarget.innerText.split("-")[0],
          clickable: true,
          windowSize:15
        });
        console.log("Onclick")
       
        // // console.log("hello")
        // console.log(e.currentTarget.innerText.split("-")[0])
       
    
      };
    
      // Event fired when the user presses a key down
      onKeyDown = e => {
        // console.log("dsaf")
        const { activeSuggestion, filteredSuggestions } = this.state;
        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
        
        
      };
    render(){
        let suggestionsListComponent;

        if (this.state.showSuggestions== true && this.state.userInput != "") {
          if (this.state.filteredSuggestions.length) {
            suggestionsListComponent = (
            //   <ul class="suggestions">
            <div>
                {this.state.filteredSuggestions.map((suggestion, index) => {
                  let className;
    
                  // Flag the active suggestion with a class
                  if (index === this.state.activeSuggestion) {
                    className = "suggestion-active";
                  }
    
                  return (
                    
                    <div className={className}
                    key = {suggestion.name}
               
                    onClick={this.onClick}>
                    <Icon type = "searcclickableh"/>
                    
                    {" "+ suggestion.name +"-" +suggestion.type}
                    </div>
                    
                      
                    
                  );
                })}
            </div>
            );
          } else {
            suggestionsListComponent = (
              <div className="no-suggestions">
                <em>Not Found</em>
              </div>
            );
          }
        }

        return(
            <Fragment>
                <Input
          type="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
          placeholder= "Search person"
          size= {60}
        />
        
       
       
        {suggestionsListComponent}
          
                {/* <MapContainer
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOgr6Eg-N_Pi3Ic5mNo1EybmjAH3w1D0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    clickedInput= {this.state.clickedInput}
    clickable= {this.state.clickable}
    windowSize= {this.state.windowSize}
  /> */}
  <PersonDetail clickedInput= {this.state.clickedInput}
    clickable= {this.state.clickable}
    />
            </Fragment>
           
            
          
      
        )
    }
}
export default withRouter(Home);