import mongoose, { Document, Schema } from 'mongoose';

export interface IMatch extends Document {
  fecha: Date;
  equipoLocal: mongoose.Types.ObjectId;
  equipoVisitante: mongoose.Types.ObjectId;
  estado: 'programado' | 'en_curso' | 'finalizado' | 'suspendido' | 'cancelado';
  resultadoLocal?: number;
  resultadoVisitante?: number;
  ubicacion?: string;
  liga: mongoose.Types.ObjectId;
  temporada?: string;
  jornada?: number;
  arbitros?: mongoose.Types.ObjectId[];
  eventos?: {
    tipo: 'gol' | 'amarilla' | 'roja' | 'sustitucion' | 'otro';
    minuto: number;
    jugador: mongoose.Types.ObjectId;
    equipoId: mongoose.Types.ObjectId;
    descripcion?: string;
    jugadorSustituto?: mongoose.Types.ObjectId; // Solo para sustituciones
  }[];
  alineacionLocal?: mongoose.Types.ObjectId[];
  alineacionVisitante?: mongoose.Types.ObjectId[];
  destacados?: {
    jugador: mongoose.Types.ObjectId;
    razon: string;
  }[];
  observaciones?: string;
}

const MatchSchema = new Schema<IMatch>(
  {
    fecha: {
      type: Date,
      required: [true, 'La fecha del partido es obligatoria'],
    },
    equipoLocal: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: [true, 'El equipo local es obligatorio'],
    },
    equipoVisitante: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: [true, 'El equipo visitante es obligatorio'],
    },
    estado: {
      type: String,
      enum: ['programado', 'en_curso', 'finalizado', 'suspendido', 'cancelado'],
      default: 'programado',
    },
    resultadoLocal: {
      type: Number,
      min: 0,
    },
    resultadoVisitante: {
      type: Number,
      min: 0,
    },
    ubicacion: {
      type: String,
      trim: true,
    },
    liga: {
      type: Schema.Types.ObjectId,
      ref: 'League',
      required: [true, 'La liga es obligatoria'],
    },
    temporada: {
      type: String,
      trim: true,
    },
    jornada: {
      type: Number,
      min: 1,
    },
    arbitros: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    eventos: [
      {
        tipo: {
          type: String,
          enum: ['gol', 'amarilla', 'roja', 'sustitucion', 'otro'],
          required: true,
        },
        minuto: {
          type: Number,
          required: true,
          min: 0,
        },
        jugador: {
          type: Schema.Types.ObjectId,
          ref: 'Player',
          required: true,
        },
        equipoId: {
          type: Schema.Types.ObjectId,
          ref: 'Team',
          required: true,
        },
        descripcion: {
          type: String,
        },
        jugadorSustituto: {
          type: Schema.Types.ObjectId,
          ref: 'Player',
        },
      },
    ],
    alineacionLocal: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Player',
      },
    ],
    alineacionVisitante: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Player',
      },
    ],
    destacados: [
      {
        jugador: {
          type: Schema.Types.ObjectId,
          ref: 'Player',
          required: true,
        },
        razon: {
          type: String,
          required: true,
        },
      },
    ],
    observaciones: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar la búsqueda y consultas frecuentes
MatchSchema.index({ fecha: 1 });
MatchSchema.index({ liga: 1 });
MatchSchema.index({ equipoLocal: 1, equipoVisitante: 1 });
MatchSchema.index({ estado: 1 });

export default mongoose.model<IMatch>('Match', MatchSchema); 