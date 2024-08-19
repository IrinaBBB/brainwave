import React from 'react'
import Section from './Section.jsx'
import Heading from './Heading.jsx'
import { benefits } from '../constants/index.js'
import Arrow from '../assets/svg/Arrow.jsx'
import { GradientLight } from './design/Benefits.jsx'

function Benefits() {
    return (
        <Section id='features'>
            <div className='container relative z-2'>
                <Heading className='md:max-w-md lg:max-w-2xl' title='Chat smarter, not harder with Brainwave' />
                <div className='flex flex-wrap gap-10 mb-10'>
                    {benefits.map(item => (
                        <div key={item.id}
                             className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                             style={{
                                 backgroundImage: `url(${item.backgroundUrl})`,
                             }}>
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                <h5 className='h2 mb-5'>{item.title}</h5>
                                <p className='body-2 mb-6 text-n-3'>{item.text}</p>
                                <div className='flex items-center mt-auto'>
                                    <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                    <p className='ml-auto font-code text-sx font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits