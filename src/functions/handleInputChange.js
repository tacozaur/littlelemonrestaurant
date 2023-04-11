import React from 'react';

export function handleInputChange(e, field, bookingData, handleChange) {
    const newBookingData = {
      ...bookingData,
      [field]: {
        value: e.target.value,
        isTouched: true
      }
    }
    handleChange(newBookingData)
  }