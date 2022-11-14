/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_builder/layout/core'
import {toAbsoluteUrl} from '../../../_builder/helpers'

const DashboardPage = () => (
  <>
    <div className='d-flex flex-column flex-lg-row'>
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card' id='kt_chat_messenger'>
          <div className='card-header' id='kt_chat_messenger_header'>
            <div className='card-title'>
              <div className='symbol-group symbol-hover'>
                <div className='symbol symbol-35px symbol-circle'>
                  <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-5.jpg')} />
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-25.jpg')} />
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <span className='symbol-label bg-light-warning text-warning 40px'>M</span>
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-9.jpg')} />
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <span className='symbol-label bg-light-danger text-danger 40px'>O</span>
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <span className='symbol-label bg-light-primary text-primary 40px'>N</span>
                </div>
                <div className='symbol symbol-35px symbol-circle'>
                  <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-23.jpg')} />
                </div>
                <a
                  href='#'
                  className='symbol symbol-35px symbol-circle'
                  // data-bs-toggle='modal'
                  // data-bs-target='#kt_modal_view_users'
                >
                  <span
                    className='symbol-label fs-8 fw-bold'
                    data-bs-toggle='tooltip'
                    data-bs-trigger='hover'
                    title='View more users'
                  >
                    +42
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
