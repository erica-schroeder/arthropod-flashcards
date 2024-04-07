const withHideable = (WrappedComponent) => {
    return ({ visible, ...props }) => {
        return (
            <WrappedComponent
                sx={{
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? 'auto' : 'none'
                }}

                {...props}
            />
        );
    };
};

export default withHideable;