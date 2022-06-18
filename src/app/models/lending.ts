export interface Lending {
  id:          number;
  usuario_id:  number;
  monto:       number;
  aprobado:    boolean;
  pagado:      boolean;
  fecha:       Date;
  fecha_pagar: Date;
}
