'use client';

import React from 'react';
import { activities } from '@/data/profile';
import { Photos } from './photos';

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Activities & Interests
        </h2>
        <p className="mt-4 text-muted-foreground">{activities.summary}</p>
      </div>
      <Photos photos={activities.photos} />
    </div>
  );
};

export default Sports;
