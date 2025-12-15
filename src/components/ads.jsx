export default function Ads(props){
    return (
      <section className="ads flex  max-w-7xl w-full mx-auto mb-7 overflow-hidden grow-0 shrink-0 basis-1">
        <img src={props.img1} alt="" className="object-cover overflow-hidden" />
        <img src={props.img2} alt="" className="object-cover overflow-hidden" />
        <img src={props.img3} alt="" className="object-cover overflow-hidden" />
      </section>
    );
}