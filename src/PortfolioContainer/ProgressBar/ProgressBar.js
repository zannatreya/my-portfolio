import React from 'react';

const ProgressBar = () => {
    return (
          <div id='skills' className=' bg-secondary lg:pb-10'>
            <div className='skillContent '>
                <h1 className='lg:text-5xl text-5xl font-bold text-base-100 text-center pt-4'>My <span className='text-success'>Skills</span></h1>
                
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-12'>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-200'>HTML <div class="badge badge-success">95%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="95" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>CSS <div class="badge badge-success">95%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="95" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>BOOTSTRAP <div class="badge badge-success">95%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="95" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>TAILWIND <div class="badge badge-success">95%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="95" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>JavaScript<div class="badge badge-success">85%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="85" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>REACT JS <div class="badge badge-success">80%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="80" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>Firebase <div class="badge badge-success">75%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="75" max="100" />

                </div>
                
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>Node Js(expres.js) <div class="badge badge-success">80%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="80" max="100" />

                </div>
                <div>
                    <h5 className='lg:text-2xl text-l font-bold text-base-100'>MongoDB <div class="badge badge-success">75%</div></h5>
                    <progress class="progress progress-success w-full h-5 bg-base-100" value="75" max="100" />

                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
