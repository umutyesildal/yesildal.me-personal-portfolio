const VIDEO_URL = 'https://mvst-public.s3.eu-central-1.amazonaws.com/landing/mvst-header-app%20%281%29.mp4';

export default function AppPreview(props){
  const { className, onStart, ...restProps } = props;
  return <>
    <div {...restProps} className={`container ${className ?? ''}`}>
      <video preload="auto" onPlay={onStart} className='video' autoPlay loop muted playsInline>
        <source src={VIDEO_URL} type='video/mp4'/>
      </video>
    </div>
    <style jsx>{`
      .container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .video{
        width: 100%;
        border-radius: 10vw;
        pointer-events: none;
        box-shadow: 0px 8px 24px #00000044;
      }

      @media screen AND (min-width: 526px) {
        .video{
          border-radius: max(min(3vw, 5.3333vh), 30px);
        }
      }
    `}
    </style>
  </>
}