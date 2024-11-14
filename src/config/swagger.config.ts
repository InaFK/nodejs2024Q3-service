import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

export function setupSwagger(app: INestApplication): void {
  const apiDocument = yaml.load(fs.readFileSync('./doc/api.yaml', 'utf8'));

  const options = new DocumentBuilder()
    .setTitle('Home Library Service')
    .setDescription('API documentation for the Home Library Service')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, { swaggerOptions: { spec: apiDocument } });
}
