import { Timeline } from '@/components/ui/timeline';
import React from 'react'

import { FaDownload } from 'react-icons/fa';

const page = () => {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <button className="relative inline-flex h-50 w-200  overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4 max-w">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1  font-medium text-white backdrop-blur-3xl">
                            <div className=' mx-20 text-cyan-300'>Internship CSociety</div>
                            Developed REST APIs using Axios services for smooth frontend-backend integration.<br/>
                            Built responsive UI components ensuring smooth user interactions<br/>
                            Closely collaborated with the backend team to integrate APIs
                        </span>
                    </button>

                </div>
            ),
        },
        {
            title: " 2021 - 2025",
            content: (
                <div>
                    <button className="relative inline-flex h-50 w-200  overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1  font-medium text-white backdrop-blur-3xl">
                            <div className=' flex mx-10 text-cyan-300'>Vidyalankar Institute Of Technology Mumbai</div>

                            🎓 Bachelor of Engineering (Computer Engineering) <br />

                            Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks.<br />

                            Built major projects: BlockMeet (decentralized conferencing).<br />

                            Active in coding competitions and technical events.
                        </span>
                    </button>
                </div>
            ),
        },
        {
            title: "2020 - 2021",
            content: (
                <div>

                    <button className="relative inline-flex h-50 w-200  overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1  font-medium text-white backdrop-blur-3xl">
                            <div className=' flex mx-10 text-cyan-300'> R.C.F. Junior College Alibag Maharashtra</div>

                            This period was pivotal in developing my analytical and problem-solving skills, which laid the groundwork for my future specialization in computer engineering.<br />
                        </span>
                    </button>
                </div>
            ),
        },
        {
            title: " 2018 - 2019",
            content: (
                <div>
                    <button className="relative inline-flex h-50 w-200  overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1  font-medium text-white backdrop-blur-3xl">
                            <div className=' flex mx-10 text-cyan-300 '> K.E.S. Arunkumar High School Alibag  Maharashtra</div>
                          <div>
                             This period was a canvas for my creative and analytical abilities, as I actively engaged in diverse projects beyond the curriculum.<br />
                            These experiences cultivated a unique blend of creativity and technical understanding.
                            </div> 
                        </span>
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div id='EDUCATION' >

            <div id="EDUCATION" className="relative w-full overflow-clip " >
                <Timeline data={data} />
            </div>












































        </div>
    )
}

export default page