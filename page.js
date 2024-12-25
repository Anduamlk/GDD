'use client'; 
import { useEffect } from 'react';  // Add necessary hooks 
import { useRouter } from 'next/navigation'; 
import styles from './sidebar.module.css'; 
import { FaBars } from 'react-icons/fa'; 
import { MdOutlineDashboard} from 'react-icons/md'; 
import { VscGitPullRequest } from 'react-icons/vsc'; 
import { TbProgressHelp } from 'react-icons/tb'; 
import { MdOutlinePrivacyTip } from 'react-icons/md'; 
import { TbMessageChatbot } from 'react-icons/tb'; 
import { TbStatusChange } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { RiAccountPinCircleLine } from "react-icons/ri";
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import Link from 'next/link'; 
import Image from 'next/image';  

 
const Sidebar = () => { 
  const [userName, setUserName] = useState("Barsenet Asfaw"); 
  const [sidebarVisible, setSidebarVisible] = useState(false);  
   const [menuVisible, setMenuVisible] = useState(false); // State for dropdown visibility
  const [showOptions, setShowOptions] = useState(false); // State for showing/hiding options
  const [newRequests, setNewRequests] = useState(0);
  const router = useRouter();
  const toggleSidebar = () => { 
    setSidebarVisible(!sidebarVisible); 
  };

  const handleLogout = () => {
    router.push('/sign-in');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewRequests(prev => prev + 1);
    }, 5000);
    return () => clearTimeout(timer); 
  }, []); 

  const handleInputChange = (e) => {
    setSearchTitle(e.target.value); // Update searchTitle based on user input
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTitle}`);
    // Implement search logic here
  };

  return (  
    <div className={styles.container}> 
    {/* Sidebar (Always visible on desktop) */} 
    <aside
  className={`${styles.sidebar} ${sidebarVisible ? styles.sidebarVisible : styles.sidebarHidden} lg:block`}
>
  {/* Close button for small screens */}
  {sidebarVisible && (
    <button
      onClick={() => setSidebarVisible(false)}  className={`${styles.closeSidebarButton} lg:hidden -mt-3`}
    >
      &times; {/* Close icon */}
    </button>
  )}


  <div className="flex flex-col space-y-4">
    <div className={styles.navItem}>
      <Link href="/dashboard" className={`${styles.navLink} flex items-center space-x-2`}>
        <MdOutlineDashboard className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Dashboard</span>
      </Link>
    </div>

    <div className={styles.navItem}>
      <Link href="/new-request" className={`${styles.navLink} flex items-center space-x-2`}>
        <VscGitPullRequest className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">New Request</span>
        {newRequests > 0 && (
          <span className={styles.notificationBadge}>{newRequests}</span>
        )}
      </Link>
    </div>
    <div className={styles.navItem}> 
        <Link href="/assigned-review" className={styles.navLink}> 
          <VscPreview className={styles.icon1} /> 
          <span> Assigned Review</span> 
          </Link> 
          </div>
    <div className={styles.navItem}>
      <Link href="/request-status" className={`${styles.navLink} flex items-center space-x-2`}>
        <TbStatusChange className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Request Status</span>
      </Link>
    </div>
   

    <div className={styles.navItem}>
      <Link href="/analytics" className={`${styles.navLink} flex items-center space-x-2`}>
        <IoAnalyticsOutline className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Analytics</span>
      </Link>
    </div>

    <div className={styles.navItem}>
      <Link href="/help" className={`${styles.navLink} flex items-center space-x-2`}>
        <TbProgressHelp className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Help & FAQ</span>
      </Link>
    </div>

    <div className={styles.navItem}>
      <Link href="/privacy" className={`${styles.navLink} flex items-center space-x-2`}>
        <MdOutlinePrivacyTip className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Privacy & Policy</span>
      </Link>
    </div>

    <div className={styles.navItem}>
      <Link href="/chatbot" className={`${styles.navLink} flex items-center space-x-2`}>
        <TbMessageChatbot className={`${styles.icon1} text-xl lg:text-2xl`} />
        <span className="text-sm lg:text-base">Chatbot</span>
      </Link>
    </div>
  </div>
</aside>

 
 
    {/* header */}
    <header className={styles.header}>
        <div className={styles.left}>
          <Image src="/logo.png" alt="Logo" className={styles.logo} width={100} height={50} />
        </div>
       

        <div className={styles.right}>
          <RiAccountPinCircleLine
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowOptions(!showOptions)}
          />
          {/* Dropdown Menu */}
          {showOptions && (
            <div className="absolute right-0 mt-[110px] w-36 bg-white border rounded-md shadow-lg z-50">
             

              <div
                className="hover:bg-gray-200 cursor-pointer text-sm sm:text-xs font-semibold p-2 rounded-b-md"
                onClick={() => {
                  handleLogout();
                  setShowOptions(false);
                }}
              >
                Logout
              </div>
            </div>
          )}
          {/* Username */}
          <span className={styles.username}>{userName}</span>
        </div>
        {/* Hamburger icon for mobile */}
        <FaBars className={`lg:hidden ${styles.hamburgerIcon}`} onClick={toggleSidebar} />
      </header>
      <main
      style={{
    backgroundImage: "url('/backgroundimage.png')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: '10px',
    minHeight: '100vh',
    width: '100vw', // Full viewport width
    overflowX: 'hidden', // Prevent horizontal overflow
  }}
>
<div className="absolute inset-0 bg-white opacity-80 z-0"> </div>
<div 
 
>
  <h2 style={{ marginLeft: '10%', marginBottom: '20px', marginTop: '1%',  fontWeight: 'bold',  fontSize: '25px', }}>
    New Customer Request Evaluation For Cyber     
  </h2>
  <h2 style={{marginLeft: '4%',  fontWeight: 'bold',  fontSize: '23px', marginTop: '4%' }}>
    New Customer Request     
  </h2>
<div className="d-flex flex-column flex-sm-row gap-3 mb-4" style={{alignItems: 'center', marginLeft: '650px', marginTop:'3px' }}>
  {/* Search by Title */}
  <div className="input-group" style={{ width: 'auto', flexShrink: 0 , marginTop: '3%'}}>

    <input
      type="text"
      placeholder="Search"
      className="form-control"
      value={searchTitle}
      onChange={(e) => setSearchTitle(e.target.value)}
      style={{
        borderRadius: '10px',
        backgroundColor: '#e0f7fa', 
        padding: '8px 20px', 
        paddingLeft: '30px', 
        fontSize: '14px',
        width: '180px',
      }}
    />
  
    <CiSearch
      style={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        fontSize: '18px',
        color: '#00796b',
      }}
    />
  </div>
  <div style={{ position: 'relative', display: 'inline-block',  marginLeft: '3%',}}>
  <select 
    className="form-control"
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    style={{
      borderRadius: '9px',
      backgroundColor: '#e0f7fa',
      fontSize: '14px',
      width: 'auto', 
      minWidth: '150px',
      backgroundPosition: 'right 10px center',
      backgroundSize: '15px',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <option value="Newest">Newest</option>
    <option value="Oldest">Oldest</option>
  </select>
  <span style={{
    position: 'absolute', 
    right: '10px', 
    top: '50%', 
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  }}>
    <i className="fas fa-chevron-down"></i> 
  </span>
</div>
   
</div>



  <div style={{ paddingRight: '200px', borderRadius: '19px', width: '97%',  height: '90px',  marginTop: '2%', overflowX: 'visible' }} className="table-responsive">

  <div className="table-responsive">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '2px solid #ccc' }}>
          <tr>
            <th><h4 style={{ color: '#7f7f7f', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Request ID</h4></th>
            <th><h4 style={{ color: '#7f7f7f', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Request Date</h4></th>
            <th><h4 style={{ color: '#7f7f7f', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Title</h4></th>
            <th><h4 style={{ color: '#7f7f7f', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Priority</h4></th>
            <th><h4 style={{ color: '#7f7f7f', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>View Letters</h4></th>
            <th><h4 style={{ color: '#999999', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Actions</h4></th>
          </tr>
        </thead>
        <tbody>
          {sortedRequests.map((request, index) => (
            <tr key={request.id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff', borderBottom: '2px solid #ccc' }}>
              <td>{request.id}</td>
              <td>{request.date}</td>
              <td>{request.title}</td>
              <td>
                {request.priority === 'Urgent' ? (
                  <><FaExclamationCircle style={{ color: '#ff6f00', marginRight: '5px' }} />Urgent</>
                ) : request.priority === 'Standard' ? (
                  <><FaLayerGroup style={{ marginRight: '5px', color: '#36bdf5' }} />Standard</>
                ) : (
                  request.priority
                )}
              </td>
              <td>
                <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={(e) => handleViewClick(e, request.id)}>
                  <FaEye />
                </div>
                {viewDropdownOpen === request.id && (
                  <div style={{ position: 'absolute', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '180px' }}>
                    <div style={{ backgroundColor: '#ADD8E6', textAlign: 'center', color: '#696969' }}><strong>Select PDF</strong></div>
                    {pdfList.length > 0 ? (
                      pdfList.map((pdf, index) => (
                        <button key={index} onClick={() => openPdf(pdf.url)} style={{ width: '100%', marginBottom: '5px' }}>
                          {pdf.name}
                        </button>
                      ))
                    ) : (
                      <p>No PDFs available</p>
                    )}
                    <button onClick={handleCancelClick} style={{ width: '100%' }}><strong>Cancel</strong></button>
                  </div>
                )}
              </td>
              <td>
                <button onClick={(e) => handleSelectClick(e, request.id)} style={{ width: '100%' }}>
                  Select <FaChevronDown />
                </button>
                {selectDropdownOpen === request.id && (
                  <div style={{ position: 'absolute', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '160px' }}>
                    <button onClick={() => handleModalOpen('Accept', request.id)} style={{ width: '100%', marginBottom: '5px' }}>Accept</button>
                    <button onClick={() => handleModalOpen('Reject', request.id)} style={{ width: '100%' }}>Reject</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .table-responsive {
          overflow-x: auto;
        }
        @media (max-width: 768px) {
          table {
            display: block;
            white-space: nowrap;
          }
          th, td {
            display: block;
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ccc;
          }
        }
      `}</style>

</div>

</div>



    {/* Modal for comments */}
{modal.open && (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 2000,
      width: '80%', // Set width to 80% of screen for larger screens
      maxWidth: '800px', // Prevent it from getting too wide on very large screens
      minWidth: '300px', // Ensure it's not too small
    }}
  >
    <h4>{modal.action} Request ID: {modal.requestId}</h4>
    <textarea
      className="form-control mb-3"
      rows="10"
      placeholder={`Enter your reason for ${modal.action.toLowerCase()}ing...`}
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      style={{
        fontSize: '16px',
        lineHeight: '1.5',
        padding: '10px',
        width: '95%', // Full width of the modal
        resize: 'none', // Prevent resizing
        minHeight: '150px', // Increased height for better visibility
      }}
    ></textarea>

    <div className="d-flex justify-content-center" style={{ gap: '100px', flexWrap: 'wrap', borderRadius: '40px',}}>
      <button
        className="btn btn-primary"
        style={{
          minWidth: '150px', // Minimum width for small screens
          height: '40px', // Consistent height
          borderRadius: '9px',
          fontSize: '15px',
          marginLeft:'240px',
        }}
        onClick={handleSendComment}
      >
        Send
      </button>
      <button
        className="btn btn-secondary"
        style={{
          minWidth: '150px', // Minimum width for small screens
          height: '40px', // Consistent height
          borderRadius: '9px',
          fontSize: '15px',
        }}
        onClick={handleCancelComment}
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </div>
  


</main>
</div> 
 
 
  ); 
}; 
 
export default Sidebar;