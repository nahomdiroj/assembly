import React from 'react'
import img from './Logo.png'
import img2 from './logo2.jpg'
const Print = () => {
  return (
  <div>
        <div >
            <div className='' >
                  <div className='flex  justify-between'>
                      <img src={img} className="object-contain w-40"  alt="" />
                      <img  src={img2}className="object-contain w-40 " alt=''/>
                  </div>
                <div className='flex'>
                  <div className='bg-yellow-200 w-full'>
                      <div className="ml-auto w-40 bg-blue-300 my-3">
                        <p>ID NO: __________<br />ኅዳር 5 ቀን 2017 ዓ.ም.</p>
                      </div>
                
                          <h1 className='font-bold  my-3 mx-auto' >እ.ኤ.አ. የ2023/2024 በጀት ዓመት የትርፍ ድርሻን (Dividend) ድልድል ማሳወቂያ</h1>
                          <h1 className='text-left'>የባለአክሲዮኑ ስም፡ _________________________________________________________</h1>
{/* 
                          <p>ሀ. የተፈረመ አክሲዮን   ________________________</p>
                          <p>ለ. የተከፈለ አክሲዮን   _________________________</p> */}

                          <div className=' m-6 text-left'>
                          {/* ሀ. የተፈረመ አክሲዮን  		_________________________<br />
                          ለ. የተከፈለ አክሲዮን  		_________________________<br />
                          ሐ. ያልተከፈለ ቀሪ ገንዘብ 	_________________________<br />
                          መ. የትርፍ ድርሻ (ከታክስ በፊት) _________________________ */}

                          <p>ሀ. የተፈረመ አክሲዮን  		_________________________</p>
                          <p> ለ. የተከፈለ አክሲዮን  		_________________________</p>
                          <p>ሐ. ያልተከፈለ ቀሪ ገንዘብ 	_________________________<br /></p>
                          <p>መ. የትርፍ ድርሻ (ከታክስ በፊት) ____________________ </p>
                          </div>


                          <div className='text-sm text-left'>
                          <h1 className='font-bold'>ማሳሰቢያ፣</h1> <br />
                        
  
<p className="mb-4">1ኛ/ 	<span className="ml-2"></span>የትርፍ ድርሻ ክፍፍሉ ተግባራዊ የሚሆነው የባንኩ ጠቅላላ ጉባዔ ከተከናወነ እና በትርፍ ክፍፍሉ ላይ ውሳኔ ከተሰጠ በኋላ እንደሆነ በትህትና እናሳውቃለን፡፡
</p>
<p className="mb-4">2ኛ/  <span className="ml-2"></span>	በ14ኛው የባለአክሲዮኖች አስቸኳይ ጠቅላላ ጉባዔ ውሳኔ መሠረት ባለአክሲዮኑ አዲስ አክሲዮን ለመግዛት የፈረሟቸውና ዋጋቸው በሙሉ ካልተከፈለ፤ ለባለአክስዮኑ የሚደርሰው ትርፍ ድርሻ/ዲቪደንድ/ ዋጋቸው ላልተከፈሉ ቀሪ የተፈረሙ አክሲዮኖች ክፍያ የሚውል ይሆናል፡፡  </p>
<p className="mb-4">
3ኛ/ <span className="ml-2"></span> የባንክ ሥራ አዋጅን ለማሻሻል በወጣው አዋጅ ቁጥር 1159/2019 መሠረት ማንኛውም ባለአክሲዮን የትርፍ ድርሻው የሚከፈለው ወይም ላለበት ላልተከፈለ ቀሪ የአክሲዮን ክፍያ እንዲውል የሚደረገው ባለአክሲዮኑ ኢትዮጵያዊ ዜግነት ወይም ትውልደ ኢትዮጵያዊ መሆናቸውን የሚገልጽ የታደሰ መታወቂያ (የቀበሌ መታወቂያ፤ መንጃ ፈቃድ፤ ፓስፓርት ወይም ሌላ መረጃ)፣ ድርጅቶች ከሆኑ የድርጅቱ ባለአክሲዮኖች በሙሉ ኢትዮጵያዊ ዜግነት ወይም ትውልደ ኢትዮጵያውያን መሆናቸውን የሚያረጋግጥ የመመሥረቻ ጽሑፍ ወይም ሌላ ተቀባይነት ያለው ማስረጃ ዋናውን ከኮፒ ጋር በመያዝ በባንኩ ዋናው መ/ቤት አክስዮን እና ኢንቨስትመንት ክፍል በአካል በመቅረብ የተዘጋጀውን ፎርም ሞልቶ ሲፈርም መሆኑን በትህትና እናሳውቃለን፡፡
</p>
                          </div>
                  </div>



             
                </div>
            </div>


    
        </div>
  </div>
  )
}

export default Print