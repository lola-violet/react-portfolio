// Projects
import React from 'react';
import 'bootstrap';
import byobackpack from '../../images/byo_backpack.png'



export default function Projects() {
    return (
        <div className='container mt-5'>
            <div className='d-flex flex-wrap'>
                <div className='card d-flex col-10 col-md-8 col-lg-4 border border-white'>
                    <img src={byobackpack} alt='BYO Backpack Logo' />
                    <div className='card-body'>
                        <h3 className='card-title'>BYO Backpack</h3>
                        <p className='card-text'>A full-stack collaborative event management application with CRUD functionality.</p>
                    </div>
                    <div className='card-body'>
                        <span>Handlebars | MySQL | JavaScript</span>
                    </div>
                    <div className='card-body d-flex'>
                        <button>Application</button>
                        <button>Repository</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// {/* <div classNameName='d-flex flex-wrap justify-content-center' id='work'>
// <div className="custom-card d-flex card col-10 col-md-8 col-lg-4 border border-white">
//     <image src={byoBackpack} className="card-img-top pt-3 img-fluid" alt="BYO Backpack Logo"></image>
//     {/* <img src="assets/byo_backpack.png" className="card-img-top pt-3 img-fluid" alt="BYO Backpack Logo"> */}
//     <div className="card-body">
//       <h3 className="custom-title card-title">BYO Backpack</h3>
//       <p className="custom-card-text card-text text-white">A full-stack collaborative event management application with CRUD functionality.</p>
//     </div>
//     <div className="custom-tech">
//         <span>Handlebars | MySQL | JavaScript</span>
//     </div>
//     <div className="card-body d-flex justify-content-around">
//       <a href="https://byo-backpack.herokuapp.com/" target="_blank" rel="noreferrer" className="custom-card-link card-link">Application</a>
//       <a href="https://github.com/lola-violet/byo-backpack" target="_blank" rel="noreferrer" className="custom-card-link card-link">Repository</a>
//     </div>
// </div>
// </div> */}

{/* <section>
            <h1>My Projects</h1>
            <div classNameName="relative-img">
                <img classNameName="img" src="" alt="" />
                <div classNameName="text-overlay project-name">
                    <h2></h2>
                    <h3>HTML/CSS/JavaScript</h3>
                </div>
                <div classNameName="center hidden">
                    <a classNameName="text-overlay margin-right" href="" target="_blank" rel="noreferrer">GitHub
                        Link</a>
                    <a classNameName="text-overlay" href="" target="_blank" rel="noreferrer">Deployed
                        Link</a>
                </div>
            </div>
            <div classNameName="box">
                <div classNameName="relative-img">
                    <img classNameName="img" src="./images/weather-dashboard.png" alt="weather dashboard screen shot" />
                    <div classNameName="text-overlay project-name">
                        <h2>Weather Dashboard</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div classNameName="center hidden">
                        <a classNameName="text-overlay margin-right" href="https://github.com/chuanw101/weather-dashboard" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a classNameName="text-overlay" href="https://chuanw101.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div classNameName="relative-img">
                    <img classNameName="img" src="./images/workday-scheduler.png" alt="work day scheduler screen shot" />
                    <div classNameName="text-overlay project-name">
                        <h2>Work Day Scheduler</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div classNameName="center hidden">
                        <a classNameName="text-overlay margin-right" href="https://github.com/chuanw101/work-day-scheduler" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a classNameName="text-overlay" href="https://chuanw101.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div classNameName="relative-img">
                    <img classNameName="img" src="./images/byob.png" alt="byo packpack screen shot" />
                    <div classNameName="text-overlay project-name">
                        <h2>BYO BackPack</h2>
                        <h3>HandleBars/NodeJS</h3>
                    </div>
                    <div classNameName="center hidden">
                        <a classNameName="text-overlay margin-right" href="https://github.com/chuanw101/byo-backpack" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a classNameName="text-overlay" href="https://byo-backpack.herokuapp.com/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

            </div>
        </section> */}