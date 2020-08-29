import React, { useState, useRef, useEffect, Fragment } from "react";
import Measure from "react-measure";
import { useUserMedia } from "./useUserMedia";
import { useCardRatio } from "./userCardRatio";
import { useOffsets } from "./useOffSet";
import {
  Video,
  Canvas,
  Wrapper,
  Container,
  Flash,
  Overlay,
  Button
} from "./styles";
import {Spin} from "antd"
import ml5 from "ml5"
// import model from "../../../data/Data"
// import * as tf from "@tensorflow/tfjs"
import { withRouter } from "react-router-dom";
// import { OmitProps } from "antd/lib/transfer/renderListBody";
import axios from "axios"
// import json from "./model.json"
// const tfn = require("@tensorflow/tfjs-node-gpu");
// import * as cvstfjs from '@microsoft/customvision-tfjs';
const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};


function Camera(props) {
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const canvasRef = useRef();
  const videoRef = useRef();
  const [weared_mask, setMask] = useState(false);
  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);
  const [linkBlob, setLinkBlob] = useState("");
  const [emask_data, setEmaskData] = useState([])
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const [classifier, setClassifier] = useState(null);
  const offsets = useOffsets(videoRef.current && videoRef.current.videoWidth,videoRef.current && videoRef.current.videoHeight,container.width,container.height);
  const [loading, setLoading] = useState(true);
 

   
  
   
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }
 
  
  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio)
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");
  //  console.log("hello")
    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
  500,
    500
    );
    classifyImg(context);
    // console.log(document.getElementById("canvas"))
    var link = document.createElement("a");
  link.download = "image.png";
  // predict(canvasRef.current
  // console.log(canvasRef.current);
    canvasRef.current.toBlob(function(blob){{
        link.href = URL.createObjectURL(blob);
        console.log(blob);
        setLinkBlob(link.href);
        // console.log(link.href);
        // load(link.href);
        // setInterval(identify(link.href), 3000)
        
        
        // const emask = document.getElementById('emask');
        // console.log(model)
        // model.execute(tf.browser.fromPixels(emask));
        // console.log(link.href); // this line should be here
      }}, "image/png", 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
    // setIsVideoPlaying(false)
  }
  function classifyImg (context) {
    // Initialize the Image Classifier method with MobileNet
    // const yolo = ml5.YOLO(video, modelLoaded);
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }
    // Put the image to classify inside a variable
  
    // Make a prediction with a selected image
    const image = document.getElementById('image');
    classifier.predict(image, 5, function(err, results) {
    // Return the results
     
      
      return results;
    })
      .then((results) => {
        // Set the predictions in the state
        // this.setPredictions(results)
        var found = false
        for(var i =0 ; i< results.length; i++){
          if(results[i].label.includes("mask")){
            // console.log(results)
            setMask(true);
            setLoading(false);
            found = true
            break;
          }
        }
        // console.log("world")
          if(props.hisotry.location.state.register === false){
            axios.post(
            "https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",
            {
              key5: `${props.history.location.state.item.date}`,
            key2: `${props.history.location.state.item.address}`,
            key3: `${props.history.location.state.item.email}`,
            key4: `${props.history.location.state.item.isMapOpen}`,
            key1: `${props.history.location.state.item.key}`,
            key6: `${props.history.location.state.item.name}`,
            key7: `${props.history.location.state.item.phone}`,
            key8: `${found?"CONFIRMED":"ALERTED"}`,
            key9: `${props.history.location.state.item.type}`,
            key10: `${props.history.location.state.item.count_visited}`,
            key11: `${found?"0":"1"}`
            }).then(res =>{console.log(res)});
          }else{
            axios.post(  
              "https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",
              {
              
              
              }).then(res =>{console.log(res)});
          }
            if (localStorage.getItem("count_data")){
      const count= parseInt( localStorage.getItem("count_data"))
      localStorage.setItem("count_data", count+1)
    }else{
      localStorage.setItem("count_data", 1)
    }
    console.log(props.history.location.state.status)
    console.log(props.history.location.state.phone)
    if (found === false){
      // console.log(props.history.location.state.?phone)
      axios.post("https://f0mrzhjnf1.execute-api.ap-southeast-2.amazonaws.com/stage", {
        message:"Welcome to our gym centre! Please consider wearing a face mask when entering our building. Wearing a mask can help protect you and those around you from community transmission.",
        phoneNumber: `${props.history.location.state.item.phone}`
      })
    }
    props.history.push("/");
    window.location.reload(false); 
        setLoading(false);
       
        console.log(results);
      })
     
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(false);
    // setIsFlashing(false)
    // onClear();
  }
  useEffect(() => { 
    // console.log(props.history.location.state)
    

    var i =0
    
    const timer = setInterval(() => { if (isVideoPlaying){
      if(isCanvasEmpty){
        console.log(isCanvasEmpty)
        handleCapture();
        handleClear();
        // const classifier= ml5.imageClassifier('MobileNet', modelLoaded);
        // setClassifier(classifier)
       
        // load();
        if(i>=0){
          console.log(i);
          clearInterval(timer)
        }
        i++
        // axios.post(
        //   "https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",
        //   {
        //     key5: `${props.history.location.state.date}`,
        //   key2: `${props.history.location.state.address}`,
        //   key3: `${props.history.location.state.email}`,
        //   key4: `${props.history.location.state.isMapOpen}`,
        //   key1: `${props.history.location.state.key}`,
        //   key6: `${props.history.location.state.name}`,
        //   key7: `${props.history.location.state.phone}`,
        //   key8: `${props.history.location.state.status}`,
        //   key9: `${props.history.location.state.type}`
        //   }).then(res =>{console.log(res)})
        
      }
      
      
      
     
    }}, 200)
      
    }
  );
  function onclick(){
    // classifier_image(canvasRef.current)
    // predict(canvasRef.current)
    // if (localStorage.getItem("count_data")){
    //   const count= parseInt( localStorage.getItem("count_data"))
    //   localStorage.setItem("count_data", count+1)
    // }else{
    //   localStorage.setItem("count_data", 1)
    // }
    // console.log(props.history.location.state.status)
    // console.log(props.history.location.state.phone)
    // if (props.history.location.state.status === "ALERTED"){
    //   console.log(props.history.location.state.phone)
    //   axios.post("https://f0mrzhjnf1.execute-api.ap-southeast-2.amazonaws.com/stage", {
    //     message:"U should wear the meask immediately",
    //     phoneNumber: `${props.history.location.state.phone}`
    //   })
    // }
    // props.history.push("/");
    // window.location.reload(false);
    
  }



  if (!mediaStream) {
    return null;
  }

  return (
    <Fragment>
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`
            }}
          >
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`
              }}
            />

            <Overlay hidden={!isVideoPlaying} />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
              id ="canvas"
            />

            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            />
          </Container>

         
          {!isCanvasEmpty && 
              
              <Fragment>
              <div>
              <h2 style= {{textAlign:"center"}}>Preview</h2>
              <img  src = {linkBlob} id = "image"/>
              </div>
                {
            loading  ?
          <Spin/> : <div> Prediction: {weared_mask ? "The visitor wears mask" :"The visitor doesn't wear mask"}</div>
          }
              </Fragment>
              
              
          }
          <Button onClick= {onclick} > Go Back </Button>
            

        
          

        </Wrapper>
      )}
    </Measure>
    
    </Fragment>
  );
}
export default withRouter(Camera)