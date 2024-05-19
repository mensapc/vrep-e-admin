import StudentLogics from './studentLogics';
import { dateFormat } from '../../lib/momentFormat';
import { IoIosCall } from "react-icons/io";
import phoneIconGray from '../../assets/images/phoneicongray.png';

function StudentProfile() {
  const { singlestudent } = StudentLogics();

  return (
    <div className="general-info-container">
      {singlestudent.status === 'pending' && <span>loading...</span>}
      {singlestudent.status === 'fulfilled' && (
        <>
          <section className="general-info">
            <p>
              Full name:
              <span>
                {singlestudent.data.first_name} {singlestudent.data.last_name}
              </span>
            </p>
            <p>
              Registration Date: <span>{dateFormat(singlestudent.data.created_at)}</span>
            </p>
            <p>
              Nationality: <span>{singlestudent.data.father_nationality}</span>
            </p>
            <p>
              State Of Origin: <span>{singlestudent.data.place_of_birth}</span>
            </p>
            <p>
              Date Of Birth: <span>{dateFormat(singlestudent.data.dob)}</span>
            </p>
          </section>

          <section className="general-contact-info">
            <div className='contact-number-for-desktop'>
              <h4>Parent Contact</h4>
              <p>
                <img src={phoneIconGray} alt="" />
                {singlestudent.data.father_phone}
              </p>
              <p>
                <img src={phoneIconGray} alt="" />
                {singlestudent.data.mother_phone}
              </p>
            </div>
            <div className='father-mobile-side'>
              <h4>Father’s Details</h4>
              <p>Name: <span>{singlestudent.data.father_name}</span>  </p>
              <p>Nationality : <span>{singlestudent.data.father_nationality}</span> </p>
              <p>State Of Origin : <span>N/A</span></p>
              <p>Place Of Birth : <span>{singlestudent.data.father_place_of_birth}</span> </p>
              <p>House Address : <span>{singlestudent.data.father_address}</span>  </p>
              <p className='mobile-parent-phone-number'>
              <IoIosCall size={24}/>
              <span>{singlestudent.data.father_phone}</span>
              </p>
            </div>
            <div className='mother-mobile-side'>
              <h4>Mother’s Details</h4>
              <p>Name: <span>{singlestudent.data.mother_name}</span>  </p>
              <p>Nationality : <span>{singlestudent.data.mother_nationality}</span> </p>
              <p>State Of Origin : <span>N/A</span>  </p>
              <p>Place Of Birth : <span>{singlestudent.data.mother_place_of_birth}</span> </p>
              <p>House Address : <span>{singlestudent.data.mother_address}</span>  </p>
              <p className='mobile-parent-phone-number'>
              <IoIosCall size={24}/>
              <span>{singlestudent.data.mother_phone}</span>
              </p>
            </div>
          </section>
        </>
      )}
      {singlestudent.status === 'rejected' && <span>{singlestudent.error.message}</span>}
    </div>
  );
}

export default StudentProfile;

