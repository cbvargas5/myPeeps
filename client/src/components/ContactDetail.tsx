import React from 'react'

interface Address {
  addressId: string;
  streetAddress: string;
  city: string;
  stateName: string;
  zip: string;
}

interface ContactDetailProps {
  contactId: string;
  detailTitle: string;
  detailInfo: string | Address;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ contactId, detailTitle, detailInfo }) => {

  return (
    <div data-contact-id={contactId} className="contact-detail-wrapper">
      <div className="detail-title">{detailTitle}</div>
      {
        typeof detailInfo == "string"
          ?
          <div className="detail-info-line-1">{detailInfo}</div>
          :
          <div data-address-id={detailInfo.addressId} className="address-block">
            <div className="detail-info-line-1">{detailInfo.streetAddress}</div>
            <div className="detail-info-line-2">{`${detailInfo.city} ${detailInfo.stateName}, ${detailInfo.zip}`}</div>
          </div>
      }
    </div>
  );
}

export default ContactDetail