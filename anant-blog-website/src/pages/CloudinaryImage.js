import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryImage = ({public_id}) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'djwtnk2oj' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image(public_id || 'cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(1000).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<div style={{ position: 'relative', width: '100%', paddingBottom: '50%' }}> {/* Maintains a 2:1 aspect ratio */}
    <AdvancedImage 
      cldImg={img} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      }} 
    />
  </div>);
};

export default CloudinaryImage;