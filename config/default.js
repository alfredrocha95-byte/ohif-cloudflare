window.config = {
  routerBasename: '/',
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'Orthanc Render',
        qidoRoot: 'https://orthanc-plugins-latest.onrender.com/dicom-web',
        wadoRoot: 'https://orthanc-plugins-latest.onrender.com/dicom-web',
        wadoUriRoot: 'https://orthanc-plugins-latest.onrender.com/wado',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          requestFromBrowser: true,
        },
      },
    ],
  },
};
