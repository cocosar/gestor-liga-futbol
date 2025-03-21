import mongoose, { Document, Schema } from 'mongoose';

export interface ITeam extends Document {
  nombre: string;
  descripcion?: string;
  categoria: 'juvenil' | 'adulto' | 'senior' | 'femenino' | 'masculino';
  tipo: 'futbol' | 'futsal' | 'futbol7';
  fechaCreacion: Date;
  entrenador?: mongoose.Types.ObjectId;
  jugadores?: mongoose.Types.ObjectId[];
  logo?: string;
  activo: boolean;
}

const TeamSchema = new Schema<ITeam>(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del equipo es obligatorio'],
      trim: true,
      maxlength: [100, 'El nombre no puede exceder los 100 caracteres'],
    },
    descripcion: {
      type: String,
      maxlength: [500, 'La descripción no puede exceder los 500 caracteres'],
    },
    categoria: {
      type: String,
      required: [true, 'La categoría del equipo es obligatoria'],
      enum: ['juvenil', 'adulto', 'senior', 'femenino', 'masculino'],
    },
    tipo: {
      type: String,
      required: [true, 'El tipo de equipo es obligatorio'],
      enum: ['futbol', 'futsal', 'futbol7'],
      default: 'futbol',
    },
    fechaCreacion: {
      type: Date,
      default: Date.now,
    },
    entrenador: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    jugadores: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    logo: {
      type: String,
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar el rendimiento de búsquedas comunes
TeamSchema.index({ nombre: 1 });
TeamSchema.index({ categoria: 1 });
TeamSchema.index({ tipo: 1 });
TeamSchema.index({ entrenador: 1 });

export default mongoose.model<ITeam>('Team', TeamSchema); 