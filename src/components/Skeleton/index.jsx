import React from 'react';
import { Skeleton as SkeletonM } from '@mui/material';
export default function Skeleton(props) {
    return (
        <SkeletonM {...props} style={{ transform: 'scale(1)', ...props.style }} />
    );
}
