import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow, 
    Circle
  } from "react-google-maps";
import Geocode from "react-geocode";
import React, {Component, Fragment} from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import {Drawer, Button} from "antd"
import { getDistance } from 'geolib';
// import data from "../../../data/Data";

  class PeopleMap extends Component{
    constructor(props){
      super(props);
      this.state = {
        userInput: "",
      
        
        defaultMapSize: { lat: -33.797, lng: 151.1 }, 
        windowSize:10, 
        emask_data: [], 
        visible: false
        
      }
    }
    componentDidMount(){
     
      fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => {
          this.setState({emask_data:data});
        
      // this.setState({openToogleList: Array(this.state.emask_data.length).fill(true)})
      Geocode.setApiKey("AIzaSyAOOgr6Eg-N_Pi3Ic5mNo1EybmjAH3w1D0");
 
      // set response language. Defaults to english.
      Geocode.setLanguage("en");
      
      // set response region. Its optional.
      // A Geocoding request with region=es (Spain) will return the Spanish city.
      Geocode.setRegion("aus");
      Geocode.enableDebug();
      
      
      
      // Get latidude & longitude from address.
      
      for (var i=0; i< data.length; i++){
        let address = data[i].address
        Geocode.fromAddress(address).then(
          response => {
            
            const { lat, lng } = response.results[0].geometry.location;
            
            
            for(var index =0 ; index <data.length; index ++){
              if(data[index].address === address){
                data[index].location= {lat:lat, lng:lng}
                this.setState({
                  emask_data:data
                })
                break;
              }
            }           
            
            // console.log(lat)
            // console.log(lng)
            

          },
          error => {
            console.error(error);
          }
        );
      }
      })
        
      }
            
      // if (this.props.clickable ===true){
      //   console.log("hello")
      //   for (var i =0; i < this.state.location_data.length; i++){
      //     if(data[i].name === this.props.clickedInput.replace(/\s/g, '')){
      //       console.log('world')
      //       // let item =this.state.location_data[i]
      //       // let copyDefaultMapSize= {...this.state.defaultMapSize};
      //       // copyDefaultMapSize.lat= parseFloat(item.lat);
      //       // copyDefaultMapSize.lng = parseFloat(item.lng) ;
      //       this.setState({
      //         // defaultMapSize: copyDefaultMapSize,
      //         windowSize:20
      //       })
      //       break;
      //     }
      //   // }
        
      //   }
      // }
      
     
    
    // componentDidUpdate(previousProps, previousState){
    //   // if (this.state.defaultCenter !== previousState.defaultCenter && this.state.windowSize !== previousState.windowSize){
    //     if (this.props.clickable ===true){
    //       console.log("hello")
    //       for (var i =0; i < this.state.location_data.length; i++){
    //         if(data[i].name === this.props.clickedInput.replace(/\s/g, '')){
    //           console.log('world')
    //           // let item =this.state.location_data[i]
    //           // let copyDefaultMapSize= {...this.state.defaultMapSize};
    //           // copyDefaultMapSize.lat= parseFloat(item.lat);
    //           // copyDefaultMapSize.lng = parseFloat(item.lng) ;
    //           this.setState({
    //             // defaultMapSize: copyDefaultMapSize,
    //             windowSize:20
    //           })
    //           break;
    //         }
    //       // }
          
    //     }
    //   }
    // }
    // changeMapSize(item){
      
      
    // }
    showDrawer = () => {
      this.setState({visible:true});
    };
  
    onClose = () => {
      this.setState({visible:false});
    };
    onOpen(index){
      
      let new_emask = [...this.state.emask_data];
      new_emask[index].isMapOpen = ! new_emask[index].isMapOpen;

      this.setState({
        emask: new_emask
      }
      )
    }
    getIndexPerson(){
      
      for(var i =0; i< this.state.emask_data.length; i++){
        if(this.state.emask_data[i].name===this.props.clickedInput.replace(/\s/g, '')){

          // console.log(this.state.clickedInput)
          return i;
        }
      }
    }
    getLocation(item){
      var list_location= []
      for (var i = 0 ; i < this.state.emask_data.length; i++){
        if(getDistance(this.state.emask_data[i].location, item.location)< 1000 && item.address !== this.state.emask_data[i].address  ){
          var coord = this.state.emask_data[i].location;
          coord.name= this.state.emask_data[i].name
          coord.address= this.state.emask_data[i].address
          console.log(item.address +" "+item.name)
          console.log(this.state.emask_data[i].name +" " +this.state.emask_data[i].address)
          // console.log(getDistance(this.state.emask_data[i].location, item.location))

          // console.log(getDistance(this.state.location_data[i],item))
          list_location.push(coord)
          
          
        }
      }
      return list_location
    }
    centerChange(){
      
      if(this.props.clickable === true){
        
        var index = this.getIndexPerson()
        if(index != undefined){
        
          this.setState({defaultMapSize:this.state.emask_data[index].location});
      
        }
      }
    }
   
    
    render(){
      console.log(this.state.emask_data)
      // console.log(this.state.location_data)
      return(
        <GoogleMap
    zoom={this.props.windowSize}
      onCenterChanged = {() =>{this.centerChange()}}
      onZoomChanged= {()=> {this.zoomChange()}}
      center={this.state.defaultMapSize}
    >
      
      {this.state.emask_data.map((item, index)=>{
        if (this.props.clickable === true){
          
          if (this.state.emask_data[index].name == this.props.clickedInput.replace(/\s/g, '')){
            var list_location= this.getLocation(item)
            
            return(
              <div>
                <Button type="primary" style= {{marginLeft:400}} onClick={this.showDrawer}>
                  View User Detail
                </Button>
                <Drawer
                  title={"Name: "+item.name}
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                
                  <p><b>Address:</b> {item.address}</p>
                  <p><b>Phone number:</b> {item.phone}</p>
                  <p><b>Status:</b> {item.type}</p>
                  <p><b>Number of time the person doesn't wear mask:</b> {item.count_alerted}</p>
                  <p><b>Number of visits:</b> {item.count_visited}</p>
                </Drawer>
              {list_location.map((item1,index1) =>{
                // console.log(data[index1].address)
                return(
                <Marker
            position={{lat : parseFloat(item1.lat), lng: parseFloat(item1.lng) }}
            key = {index1}
            onClick={() => this.onOpen(index1) }
              >
            {this.state.emask_data[index1].isMapOpen &&
              <Fragment>
              <InfoWindow onCloseClick={()=> this.onOpen(index1)}>
                <div>
                <h3>Name: {item1.name}</h3>
                <h3>Address: {item1.address}</h3>
                </div>
                {/* <Person name = {item1.name} /> */}
              </InfoWindow>
              
            </Fragment> 
          
            }
         
              </Marker>

              )})}
              <Marker
            position={{lat : parseFloat(item.location.lat), lng: parseFloat(item.location.lng) }}
            key = {index}
            onClick={() => this.onOpen(index) }
              >
            {this.state.emask_data[index].isMapOpen &&
              <Fragment>
              <InfoWindow onCloseClick={()=> this.onOpen(index)}>
                <div>
                <h3 style= {{color: "red"}}><b> Name: {this.state.emask_data[index].name}</b></h3>
                {/* <h3>{this.props.clickedInput}</h3> */}
                <h3 style= {{color: "red"}}><b> Address: {this.state.emask_data[index].address}</b></h3>
                </div>
              </InfoWindow>
              <Circle
              radius= {1000}
              center= {{lat : parseFloat(item.location.lat), lng: parseFloat(item.location.lng) }}
              />
              
            </Fragment> 
          
            }
            
              </Marker>
            </div>
           
            
      
      
              
          )
    }}})}
      
    </GoogleMap>
      )
    }
  }
  const MapContainer =compose(
    withScriptjs,
    withGoogleMap
  )(PeopleMap);
  
  export default MapContainer
  
//   <MapWithAMarker
//     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//   />