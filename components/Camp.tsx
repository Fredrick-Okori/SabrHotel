
import Image from "next/image";

type CampProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle }:
  CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat`}>
      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4  rounded-full p-3" style={{ backgroundColor: '#622C60'}}>
          <div className="rounded-full  p-4" style={{ backgroundColor: '#E89B23' }}>
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
         
        
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Enjoy Pool view"
          subtitle="Sabr Resort Hotel"
          peopleJoined=""
        />
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Swimming Pool"
          subtitle="Swim in our blue waters"
          peopleJoined="50+ Booked"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Order Food"
          subtitle="Great Menu"
          peopleJoined="30+ Booked"
        />

      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="p-8 lg:max-w-[400px] xl:max-w-[440px]
        
        xl:rounded-5xl xl:px-10 xl:py-15 relative w-full overflow-x-hidden
        rounded-3xl"
          style={{ backgroundColor: '#E89B23' }}
        >
          <h2 className="regular-24 md:regular-32 2xl:regular-64
          capitalize text-white">
            <strong>Sabr </strong>Resort Hotel
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
              Relax! We are here to make your hotel experience stress-free and enjoyable, ensuring you start your adventure with ease.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp