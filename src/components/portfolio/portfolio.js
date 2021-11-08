import { Component } from "react";
import './portfolio.css';
import backtracking from './portfolioImages/backtracking.png'
import todoWeb from './portfolioImages/todoWeb.png'
import todoMobile from './portfolioImages/todoMobile.png'
import todoJs from './portfolioImages/todoJs.png'
import clock from './portfolioImages/clock.png'


export default class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio-container">
                <div>
                <div className="portfolio-title">My Portfolio</div>
                <div className="portfolio-underline"></div>
                </div>
                <div className="flex2">
                    <a href="https://ash8989.github.io/github-check/"><img src={backtracking} alt={backtracking} className="imageClass" ></img></a>
                    <a href="https://ash8989.github.io/CSS-Project-1/"><img src={todoWeb} alt={todoWeb} className="imageClass"></img></a>
                    <a href="https://ash8989.github.io/CSS-Project-1/"><img src={todoMobile} alt={todoMobile} className="imageClass"></img></a>
                    <a href="https://ash8989.github.io/todoJs_project/"><img src={todoJs} alt={todoJs} className="imageClass"></img></a>
                    <a href="https://ash8989.github.io/clock_project/"><img src={clock} alt={clock} className="imageClass"></img></a>

                </div>

            </div>
        )
    }
}