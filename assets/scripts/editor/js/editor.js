wp.domReady( () => {

    wp.blocks.registerBlockStyle( 'core/heading', [
        {
            name: 'default',
            label: 'Default',
            isDefault: true,
        },
        {
            name: 'tosca-zero',
            label: 'Tosca Zero',
        },
        {
            name: 'tosca-zero-uppercase',
            label: 'Tosca Zero Uppercase',
        }
    ]);
} );