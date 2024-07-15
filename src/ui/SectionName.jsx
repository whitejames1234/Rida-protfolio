import styles from "../components/style"

function SectionName({content}) {
  return (
    <div className="flex items-center gap-4  ">
      <span className="bg-yellow-50 h-10 w-2 "> </span>
      <h3 className={`${styles.mediumHeading} text-secondaryDark `} >{content} </h3>
    </div>
  )
}

export default SectionName
