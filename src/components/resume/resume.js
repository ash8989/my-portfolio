import { Component } from "react";
import './resume.css'

export default class Resume extends Component{
    render(){
        return(
            <div className="resume-container">
                <div className="resume-title">
                    <div>Resume</div>
                    <div className="resume-underline"></div>
                </div>
                <div className="flex3">
                    <div className="firstBox">
                        <div className="education">Education</div>
                        <div className="education-underline"></div>
                    </div>
                    <div className="secondBox"></div>
                </div>

            </div>
        )
    }
}