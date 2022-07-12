import React, { Suspense } from 'react';

type ComponentType = typeof React.Component;
const Loadable: any = (WrappedComponent: ComponentType) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent />
        </Suspense>
    );
};

export default Loadable;
