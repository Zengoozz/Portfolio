import { MainStyles } from '../../styles/mainStyles'

export const ProjectCard = ({ ImgSrc }) => {
  return (
    <div className={`${MainStyles.RowJustifiedAround} mt-20 px-5`}>
      <img className={`rounded-full shadow-2xl mxs-40 hover:scale-110 hover:duration-500 hover:ease-in-out hover:rounded-[30px]`} src={ImgSrc} alt="project-img" width={700} height={500} />
      <div className={`text-white w-[40%] text-center ${MainStyles.Column}`}>
        <h1 className={`mt-5 font-bold select-none text-[5rem] leading-none uppercase gradient_text`}>
          Order Summary Card
        </h1>
        <span className='px-5 w-[95%] mt-10'>
          <p className={`text-left text-gray-400 text-2xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia asperiores praesentium fugit molestias exercitationem cum at expedita quas eligendi obcaecati neque sunt vitae alias corporis unde ullam et itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime quas libero asperiores tenetur mollitia blanditiis ratione suscipit consequatur fuga. Ducimus necessitatibus enim distinctio quod totam in suscipit quas incidunt.
          </p>
        </span>
      </div>
    </div>
  )
}
