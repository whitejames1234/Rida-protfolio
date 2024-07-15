function Copywrite() {
  const d = new Date();
 let year = d.getFullYear();

  return (
    <div>
      <p className="bg-primary py-[16px] border-b-2 border-x-2 lg:border-b-4 border-secondary lg:border-x-4 text-[16px] text-yellow-50 text-center "> Copywright © <span className="text-secondary">{year}</span> James White, Inc .All rights reserved.</p>
    </div>
  )
}

export default Copywrite
