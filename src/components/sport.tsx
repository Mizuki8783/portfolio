'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const activityPhotos: PhotoItem[] = [
    {
      src: '/mnt_fuji_1.jpg',
      alt: 'Top of Mt. Fuji',
      caption: 'First time hiking to the top of Mt. Fuji',
    },
    {
      src: '/mnt_fuji_2.jpg',
      alt: 'Morning sunrise from the top of Mt. Fuji',
      caption: 'Morning sunrise from the top of Mt. Fuji',
    },
    {
      src: '/hiking.jpg',
      alt: 'Hiking in the mountains',
      caption: 'Hiking in the mountains',
    },
    {
      src: '/dj.jpg',
      alt: 'DJing at a bar',
      caption: 'DJing my favorite songs at a bar',
    },
    {
      src: '/bicycle.jpg',
      alt: 'Bicycling on scenic routes',
      caption: 'Pedalpalooza event in Portland, OR',
    },
    {
      src: '/run.jpg',
      alt: 'Running in the mountains',
      caption: 'First time running a full marathon',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Activities & Interests
        </h2>
        <p className="mt-4 text-muted-foreground">
          When I'm not working on data engineering projects, I enjoy music and outdoor activities.
          I'm passionate about 90s-20s HIP-HOP and R&B music, and love spending time outdoors
          hiking, bicycling, and running. These activities help me stay balanced and inspired.
        </p>
      </div>
      <Photos photos={activityPhotos} />
    </div>
  );
};

export default Sports;
