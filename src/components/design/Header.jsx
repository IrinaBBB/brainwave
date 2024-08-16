import { background } from '../../assets'

export const Rings = () => {
    // return (
    //     <div
    //         className='absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'>
    //         <div
    //             className='absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
    //         <div
    //             className='absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
    //     </div>
    // )
    return (
        <div
            className='absolute top-1/2 left-1/2 w-[51.375rem] aspect-square -translate-x-1/2 -translate-y-1/2'>
            <svg
                className='absolute top-1/2 left-1/2 w-[51.375rem] h-auto -translate-x-1/2 -translate-y-1/2'
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,512 C0,256 256,0 512,0 C768,0 1024,256 1024,512 C1024,768 768,1024 512,1024 C256,1024 0,768 0,512 Z"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M0,512 C0,320 320,0 512,0 C704,0 1024,320 1024,512 C1024,704 704,1024 512,1024 C320,1024 0,704 0,512 Z"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M0,512 C0,384 384,0 512,0 C640,0 1024,384 1024,512 C1024,640 640,1024 512,1024 C384,1024 0,640 0,512 Z"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        </div>
    )
}

export const SideLines = () => {
    return (
        <>
            <div className='absolute top-0 left-5 w-0.25 h-full bg-n-6'></div>
            <div className='absolute top-0 right-5 w-0.25 h-full bg-n-6'></div>
        </>
    )
}

export const BackgroundCircles = () => {
    return (
        <>
            <div
                className='absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DFDFDF] to-[#1A1A32] rounded-full'></div>
            <div
                className='absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#DFDFDF] to-[#1A1A32] rounded-full'></div>
            <div
                className='absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#DFDFDF] to-[#1A1A32] rounded-full'></div>
        </>
    )
}

export const HamburgerMenu = () => {
    return (
        <div className='absolute inset-0 pointer-events-none lg:hidden'>
            <div className='absolute inset-0 opacity-[.03]'>
                {/*<img*/}
                {/*    className='w-full h-full object-cover'*/}
                {/*    src={background}*/}
                {/*    width={688}*/}
                {/*    height={953}*/}
                {/*    alt='Background'*/}
                {/*/>*/}
            </div>
            {/*<Rings />*/}
            <SideLines />
            <BackgroundCircles />
        </div>
    )
}
