import React from 'react'
import Dpt from '../dpt/Dpt'

export default function DatosStudent({ register, errors, setValue, getValues }) {
  return (
    <>
    <br />
    <br />
    <br />
      <h2>
        Datos del Participante
      </h2>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>¿Esta Cédulado?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Si"
                {...register("student_hasCI", { required: "Seleccione una opción" })}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                value="No"
                {...register("student_hasCI", { required: "Seleccione una opción" })}
              />
              No
            </label>
          </div>
          <div>{errors.student_hasCI && <span className="error-message">{errors.student_hasCI.message}</span>}</div>
        </div>
        <div className="schedule-name-input">
          <label>Nacionalidad:</label>
          <div>
            <select {...register("student_nationality", {
              required: 'Seleccione la Nacionalidad',
              pattern: {}
            })}>
              <option value="Venezolano">Venezolano</option>
              <option value="Extranjero">Extranjero</option>
            </select>
            <div>{errors.student_nationality && <span className="error-message">{errors.student_nationality.message}</span>}</div>
          </div>
        </div>
        <div className="schedule-name-input">
          <label>Cédula o Cédula escolar:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_CI", {
                required: 'ingrese cédula del estudiante',
                pattern: {
                  value: /^[0-9]{8,13}$/,
                  message: 'Por favor ingrese una cedula valida'
                }
              })}
            />
            <div>{errors.student_CI && <span className="error-message">{errors.student_CI.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Primer Nombre:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_firstname", {
                required: 'ingrese nombre',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.student_firstname && <span className="error-message">{errors.student_firstname.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Segundo Nombre:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_secondname", {
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.student_secondname && <span className="error-message">{errors.student_secondname.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Primer Apellido:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_firstlastname", {
                required: 'ingrese apellido',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.student_firstlastname && <span className="error-message">{errors.student_firstlastname.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Segundo Apellido:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_secondlastname", {
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras y espacios'
                }
              })}
            />
            <div>{errors.student_secondlastname && <span className="error-message">{errors.student_secondlastname.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Fecha de Nacimiento:</label>
          <div>
            <input className="add-input-2"  type="date" placeholder='nombre de la actividad'
              {...register("student_birthdate", {
                required: 'ingrese nombre de la actividad',
              })}
            />
            <div>{errors.student_birthdate && <span className="error-message">{errors.student_birthdate.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Edad:</label>
          <div>
            <input className="add-input-2" minLength={1} maxLength={3} type="text" 
              {...register("student_age", {
                required: 'ingrese Edad',
                pattern: {
                  value: /^(1[2-7])$/,
                  message: 'ingrese una edad valida'
                }
              })}
            />
            <div>{errors.student_age && <span className="error-message">{errors.student_age.message}</span>}</div>
          </div>
        </div>

      </div>
      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Género:</label>
          <div>
            <select {...register("student_gender", {
              required: 'Seleccione la Género',
            })}>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
            <div>{errors.student_gender && <span className="error-message">{errors.student_gender.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Estado Civil:</label>
          <div>
            <select {...register("student_civilstatus", {
              required: 'Seleccione la estado civil',
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
              {...register("student_phone1", {
                required: 'ingrese teléfono',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Ingrese numero valido'
                }
              })}
            />
            <div>{errors.student_phone1 && <span className="error-message">{errors.student_phone1.message}</span>}</div>
          </div>
        </div>

        {/* <div className="schedule-name-input">
          <label>Teléfono Local:</label>
          <div>
            <input className="add-input-2"  type="text" placeholder='nombre de la actividad'
              {...register("student_phone2", {
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Ingrese numero valido'
                }
              })}
            />
            <div>{errors.student_phone2 && <span className="error-message">{errors.student_phone2.message}</span>}</div>
          </div>
        </div> */}

      </div>

      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Correo Electrónico:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="email" 
              {...register("student_email", {
                required: 'ingrese correo',
              })}
            />
            <div>{errors.student_email && <span className="error-message">{errors.student_email.message}</span>}</div>
          </div>
        </div>

      </div>

      <label htmlFor="">Dirección</label>
      <div className="inputs-2">
        <Dpt
          estado={"student_state"}
          municipio={"student_municipality"}
          parroquia={"student_parish"}
          setValue={setValue}
          getValues={getValues}
        />
      </div>



      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Dirección:</label>
          <div>
            <input className="add-input-2" maxLength={70} type="text" 
              {...register("student_address", {
                required: 'ingrese nombre de la actividad',
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-/]+$/,
                  message: 'Solo se permiten letras, espacios y numeros'
                }
              })}
            />
            <div>{errors.student_address && <span className="error-message">{errors.student_address.message}</span>}</div>
          </div>
        </div>

      </div>


      <h2>
        Datos complementarios
      </h2>

      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>¿Posee alguna discapacidad?:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" placeholder='Discapacidad'
              {...register("student_disability", {
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras, espacios y numeros'
                }
              })}
            />
            <div>{errors.student_disability && <span className="error-message">{errors.student_disability.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Grado que cursa el estudiante:</label>
          <div>
            <select {...register("student_grade", {
              required: 'Seleccione grado académico',
            })}>
              <option value="7mo grado" >7mo grado</option>
              <option value="8vo grado" >8vo grado</option>
              <option value="9no grado" >9no grado</option>
              <option value="C. Div. 4to Año" >C. Div. 4to Año</option>
              <option value="C. Div. 5to Año" >C. Div. 5to Año</option>
              <option value="C. Téc. 4to Año" >C. Téc. 4to Año</option>
              <option value="C. Téc. 5to Año" >C. Téc. 5to Año</option>
              <option value="C. Téc. 6to Año" >C. Téc. 6to Año</option>
            </select>
            <div>{errors.student_grade && <span className="error-message">{errors.student_grade.message}</span>}</div>
          </div>
        </div>

      </div>

      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>Talla de Franela:</label>
          <div>
            <select {...register(`student_shirtSize`, {
            })} >
              <option value="" disabled selected>Seleccione</option>
              <option value="12" >12</option>
              <option value="13" >13</option>
              <option value="14" >14</option>
              <option value="15" >15</option>
              <option value="16" >16</option>
              <option value="S" >S</option>
              <option value="M" >M</option>
              <option value="L" >L</option>
              <option value="XL" >XL</option>
              <option value="XXL" >XXL</option>
            </select>
            <div>{errors.student_shirtSize && <span className="error-message">{errors.student_shirtSize.message}</span>}</div>
          </div>
        </div>

        <div className="schedule-name-input">
          <label>Institución Perteneciente:</label>
          <div>
            <input className="add-input-2" minLength={5} maxLength={70} type="text" 
              {...register("student_institution", {
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo se permiten letras, espacios y numeros'
                }
              })}
            />
            <div>{errors.student_institution && <span className="error-message">{errors.student_institution.message}</span>}</div>
          </div>
        </div>

      </div>

      <div className="inputs-2">
        <div className="schedule-name-input">
          <label>¿Tiene acceso a un computador?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Si"
                {...register("student_pcaccess", { required: "Seleccione una opción" })}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                value="No"
                {...register("student_pcaccess", { required: "Seleccione una opción" })}
              />
              No
            </label>
          </div>
          <div>{errors.student_pcaccess && <span className="error-message">{errors.student_pcaccess.message}</span>}</div>
        </div>

        <div className="schedule-name-input">
          <label>¿Tiene acceso a internet?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Si"
                {...register("student_internetaccess", { required: "Seleccione una opción" })}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                value="No"
                {...register("student_internetaccess", { required: "Seleccione una opción" })}
              />
              No
            </label>
          </div>
          <div>{errors.student_internetaccess && <span className="error-message">{errors.student_internetaccess.message}</span>}</div>
        </div>

        <div className="schedule-name-input">
        <label>¿Desea recibir mas información en el área?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Si"
                {...register("student_moreinfosubs", { required: "Seleccione una opción" })}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                value="No"
                {...register("student_moreinfosubs", { required: "Seleccione una opción" })}
              />
              No
            </label>
          </div>
          <div>{errors.student_moreinfosubs && <span className="error-message">{errors.student_moreinfosubs.message}</span>}</div>
        </div>

      </div>


    </>
  )
}
