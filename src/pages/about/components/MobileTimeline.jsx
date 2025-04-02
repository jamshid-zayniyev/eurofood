import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Description, HeaderTitle } from '../../../components/typography';
import { FaCircle } from 'react-icons/fa';



const MobileTimeline = ({event,index}) => {
  return (
    <div className='block md:hidden'>
    <VerticalTimeline layout='1-column-left' lineColor='red'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  red' }}
    date=""
    lineColor={"red"}
    iconStyle={{ background: 'red', color: '#fff' }}
    icon={<FaCircle />}
  >
    <img src={event.image} alt={`Event ${index}`} className="w-full h-auto  rounded-lg" />
    <HeaderTitle title={event.year} leafClass={'w-[30px] md:w-auto'} position={`mt-[10px] md:mt-[0] mb-[10px] xl:mb-[20px] 2xl:mb-[30px]`}/>
    <Description description={event.description} classname={`line-clamp-[10] md:line-clamp-[8]`}/>
    
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default MobileTimeline