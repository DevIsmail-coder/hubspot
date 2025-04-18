import React from 'react'
import './savedspace.css'
import { FaStar } from 'react-icons/fa';

const Spacings = () => {
  return (
    <div className='userSavedspaces'>
    <table className="custom-table">
        <thead className='custom-tableData' >
            <tr className='custom-tableData1'>
                <th className='userSaveddata'>Space Name</th>
                <th className='userSaveddata'>Location</th>
                <th className='userSaveddata'>Rating</th>
            </tr>
        </thead>

        <tbody>
            <tr className='userSavedDetaildiv' >
                <td className='userSavedDetails'>
                    <div className="space-name-cell">
                        <img
                            src="https://via.placeholder.com/50"
                            alt=""
                            className="space-img"
                        />
                        <div className="space-text">
                            <p className="space-title">FlexiSpace</p>
                            <p className="space-subtitle">Cowork</p>
                        </div>
                    </div>
                </td>
                <td className='space-titleLocation'>Ikeja</td>
                <td className='space-titleRating'>
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color="gold" />
                    ))}
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Spacings
