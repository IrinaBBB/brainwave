const ButtonSvg = (white) => (
    <>
        {/* Left Side */}
        <svg
            className="absolute top-0 left-0"
            width="21"
            height="44"
            viewBox="0 0 21 44"
        >
            <path
                fill={white ? 'white' : 'none'}
                stroke={white ? 'white' : 'url(#btn-left)'}
                strokeWidth="2"
                d="M21,43 L10,43 C5,43 1,38.418 1,33 L1,11 C1,5.582 5,1 10,1 L21,1"
            />
        </svg>

        {/* Middle Section */}
        <svg
            className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
            height="44"
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
            fill={white ? 'white' : 'none'}
        >
            {white ? (
                <polygon
                    fill="white"
                    fillRule="nonzero"
                    points="100 0 100 44 0 44 0 0"
                />
            ) : (
                <>
                    <polygon
                        fill="url(#btn-top)"
                        fillRule="nonzero"
                        points="100 42 100 44 0 44 0 42"
                    />
                    <polygon
                        fill="url(#btn-bottom)"
                        fillRule="nonzero"
                        points="100 0 100 2 0 2 0 0"
                    />
                </>
            )}
        </svg>

        {/* Right Side (Mirroring Left Side) */}
        <svg
            className="absolute top-0 right-0"
            width="21"
            height="44"
            viewBox="0 0 21 44"
        >
            <path
                fill={white ? 'white' : 'none'}
                stroke={white ? 'white' : 'url(#btn-right)'}
                strokeWidth="2"
                d="M0,43 L11,43 C16,43 20,38.418 20,33 L20,11 C20,5.582 16,1 11,1 L0,1"
            />
        </svg>
    </>
)

export default ButtonSvg
