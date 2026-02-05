const  express  =  require('express');
const  swaggerUi  =  require('swagger-ui-express');
const  swaggerDocument  =  require('./swagger.json');

const  userRoutes  =  require('./controller/userController');
const  authRoutes  =  require('./controller/authController');
const  transferRoutes  =  require('./controller/transferController');

const  app  =  express();
app.use(express.json());

//  Swagger
app.use('/api-docs',  swaggerUi.serve,  swaggerUi.setup(swaggerDocument));

//  Rotas
app.use('/auth',  authRoutes);
app.use('/users',  userRoutes);
app.use('/transfers',  transferRoutes);

module.exports  =  app;

