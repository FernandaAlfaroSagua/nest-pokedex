import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Decorador para definir una clase como un esquema de Mongoose.
@Schema()
export class Pokemon extends Document {
  // El documento de Mongoose es una clase que representa un documento almacenado en la base de datos MongoDB.

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
