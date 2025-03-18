import mongoose, { Document, Schema } from 'mongoose';

export interface ITeam extends Document {
  nombre: string;
  logo?: string;
  colorPrimario: string;
  colorSecundario?: string;
  fechaCreacion: Date;
  manager: mongoose.Types.ObjectId;
  ubicacion?: string;
  descripcion?: string;
  activo: boolean;
  ligaActual?: mongoose.Types.ObjectId;
  historialLigas?: mongoose.Types.ObjectId[];
}

const TeamSchema = new Schema<ITeam>(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del equipo es obligatorio'],
      unique: true,
      trim: true,
    },
    logo: {
      type: String,
      default: '/default-team-logo.png',
    },
    colorPrimario: {
      type: String,
      required: [true, 'El color primario es obligatorio'],
      default: '#000000',
    },
    colorSecundario: {
      type: String,
      default: '#FFFFFF',
    },
    fechaCreacion: {
      type: Date,
      default: Date.now,
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'El manager del equipo es obligatorio'],
    },
    ubicacion: {
      type: String,
      trim: true,
    },
    descripcion: {
      type: String,
      maxlength: [500, 'La descripción no puede tener más de 500 caracteres'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
    ligaActual: {
      type: Schema.Types.ObjectId,
      ref: 'League',
    },
    historialLigas: [
      {
        type: Schema.Types.ObjectId,
        ref: 'League',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Índice para búsquedas más rápidas por nombre
TeamSchema.index({ nombre: 1 });

export default mongoose.model<ITeam>('Team', TeamSchema); 