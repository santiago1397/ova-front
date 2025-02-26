import React from 'react'
import './styles.css'
import Dpt from '../dpt/Dpt'

export default function DatosTutor({ register, errors, setValue, getValues }) {
  return (
    <>
      <br />
      <br />
      <br />
      <h2>
        Datos del Representante
      </h2>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Nacionalidad:</label>
          <div>
            <select {...register("tutor_nationality", {
              pattern: {}
            })}>
              <option value="Venezolano">Venezolano</option>
              <option value="Extranjero">Extranjero</option>
            </select>
            <div>{errors.tutor_nationality && <span className="error-message">{errors.tutor_nationality.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Cédula:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={9} type="text" 
              {...register("tutor_ci", {
                pattern: {
                  value: /^[0-9]{5,9}$/,
                  message: 'Por favor ingrese una cedula valida'
                }
              })}
            />
            <div>{errors.tutor_ci && <span className="error-message">{errors.tutor_ci.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Primer Nombre:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_firstname", {
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras, espacios y numeros'
                }
              })}
            />
            <div>{errors.tutor_firstname && <span className="error-message">{errors.tutor_firstname.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Segundo Nombre:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_secondname", {
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.activityName && <span className="error-message">{errors.activityName.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Primer Apellido:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_firstlastname", {
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.tutor_firstlastname && <span className="error-message">{errors.tutor_firstlastname.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Segundo Apellido:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_secondlastname", {
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.tutor_secondlastname && <span className="error-message">{errors.tutor_secondlastname.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Género:</label>
          <div>
            <select {...register("tutor_gender", {
            })}>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
            <div>{errors.tutor_gender && <span className="error-message">{errors.tutor_gender.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Estado Civil:</label>
          <div>
            <select {...register("tutor_civilstatus", {
            })}>
              <option value="Soltero">Soltero</option>
              <option value="Casado">Casado</option>
              <option value="Separado">Separado</option>
              <option value="Divorsiado">Divorsiado</option>
              <option value="Viudo">Viudo</option>
            </select>
            <div>{errors.tutor_civilstatus && <span className="error-message">{errors.tutor_civilstatus.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Teléfono:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_phone1", {
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Ingrese numero valido'
                }
              })}
            />
            <div>{errors.tutor_phone1 && <span className="error-message">{errors.tutor_phone1.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Teléfono local:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_phone2", {
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Ingrese numero valido'
                }
              })}
            />
            <div>{errors.tutor_phone2 && <span className="error-message">{errors.tutor_phone2.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Correo Electrónico:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="email" 
              {...register("tutor_email", {
              })}
            />
            <div>{errors.tutor_email && <span className="error-message">{errors.tutor_email.message}</span>}</div>
          </div>
        </div>

      </div>

      <label htmlFor="">Dirección</label>
      <div className="inputs-2">
        <Dpt
          estado={"tutor_state"}
          municipio={"tutor_municipality"}
          parroquia={"tutor_parish"}
          setValue={setValue}
          getValues={getValues}
        />
      </div>




      {/* <h2>
        Datos complementarios
      </h2>

      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Institución perteneciente:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("tutor_institution", {
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras, espacios y numeros'
                }
              })}
            />
            <div>{errors.tutor_institution && <span className="error-message">{errors.tutor_institution.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Especialidad del Tutor:</label>
          <div>
            <select {...register("tutor_especiality", {
            })}>
              <option value="Física">Física</option>
              <option value="Biología">Biología</option>
              <option value="Ciencias de la Tierra">Ciencias de la Tierra</option>
              <option value="Matemática">Matemática</option>
            </select>
            <div>{errors.activityName && <span className="error-message">{errors.activityName.message}</span>}</div>
          </div>
        </div>

      </div> */}


    </>
  )
}
