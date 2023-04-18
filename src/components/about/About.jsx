import React, { useEffect, useRef, useState } from "react";
import './about.css';
import ProgressBar from 'react-animated-progress-bar';

const About = () => {

    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const [completedJS, setCompletedJS] = useState("")
    const [completedCSS, setCompletedCSS] = useState("");
    const [completedHTML, setCompletedHTML] = useState("");
    const [completedReact, setCompletedReact] = useState("")
    const [completedCSharp, setCompletedCSharp] = useState("")
    useEffect(() => {
        setCompletedJS("94")
        setCompletedCSS("93")
        setCompletedHTML("95")
        setCompletedReact("92")
        setCompletedCSharp("96")
    }, [])
    return (
        <div className="about-container">
            <div className="about-head">
                <h1>Rólam</h1>
            </div>
            <div className="about-skills">
                
                <h2 id="about-skill-title">Skillek</h2>
                <div className="skill" ref={ref}>
                    <span>JavaScript</span>
                    {isVisible ?
                        <ProgressBar
                            width="30vw"
                            height="10px"
                            rect
                            fontColor="white"
                            percentage={completedJS}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="white"
                            trackBorderColor="white"
                            defColor={{
                                excellent: "#F0DB4F"
                            }}
                        /> : ""}
                </div>
                <div className="skill" ref={ref}>
                    <span>React</span>
                    {isVisible ?
                        <ProgressBar
                            width="30vw"
                            height="10px"
                            rect
                            fontColor="white"
                            percentage={completedReact}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="white"
                            defColor={{
                                excellent: "#61DBFB"
                            }}
                        /> : ""}
                </div>
                <div className="skill" ref={ref}>
                    <span>HTML</span>
                    {isVisible ?
                        <ProgressBar
                            width="30vw"
                            height="10px"
                            rect
                            fontColor="white"
                            percentage={completedHTML}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="white"
                            defColor={{
                                excellent: "#e34c26"
                            }}
                        /> : ""}
                </div>
                <div className="skill" ref={ref}>
                    <span>C#</span>
                    {isVisible ?
                        <ProgressBar
                            width="30vw"
                            height="10px"
                            rect
                            fontColor="white"
                            percentage={completedCSharp}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#666666"
                            trackBorderColor="white"
                            defColor={{
                                excellent: '#9B4993'
                            }}
                        /> : ""}
                </div>
                <div className="skill" ref={ref}>
                    <span>CSS</span>
                    {isVisible ?
                        <ProgressBar
                            width="30vw"
                            height="10px"
                            rect
                            fontColor="white"
                            percentage={completedCSS}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="white"
                            defColor={{
                                excellent: "#264de4"
                            }}
                        /> : ""}
                </div>
                <div className="skill" ref={ref}>
                    {isVisible ?
                        <ProgressBar
                            width="0vw"
                            height="0px"
                            rect
                            fontColor="black"
                            percentage={0}
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="black"
                            defColor={{
                                excellent: "#264de4"
                            }}
                        /> : ""}
                </div>
                
            </div>
            <div className="about-profile">
                
            </div>
        </div>
    )
}

function useIsVisible(ref) {
    const [isIntersecting, setInsersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setInsersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        }
    }, [ref])

    return isIntersecting;
}


export default About;