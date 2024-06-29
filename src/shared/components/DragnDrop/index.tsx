import React, { useEffect, useState } from 'react';
import s from './dragndrop.module.css';
import axios from 'axios';

import clsx from 'clsx';

export const DragnDrop = () => {
  const hostUrl = 'https://788413a1796040ee.mokky.dev/uploads';

  const [files, setFiles] = useState<any[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploaded, setUploaded] = useState<any>(); // ответ от сервера

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles([...e.target.files]);
    }
  };

  const handleReset = () => {
    setFiles([]);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data = new FormData();
    files.forEach(file => {
      data.append('file', file);
    });

    const res = await fetch(hostUrl, {
      method: 'POST',
      body: data,
    });
    const d = await res.json();

    setUploaded(d);
    console.log(d);

    setFiles([]);

    // fetch(hostUrl, { method: "POST", body: data })
    //     .then((response) => response.json())
    //     .then(() => setFiles([]))
    //     .then((res) => console.log(res))
    //     .catch(() => setFiles([]));

    // const d = await res.json();

    // setUploaded(d);
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleLive = (e: any) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles([...e.dataTransfer.files]);
    }
  };

  return (
    <div className={s.wrapper}>
      <h1>Загрузить фото</h1>
      <form
        className={clsx(s.form, { [s.drag]: dragActive })}
        // className={clsx(s.inputField, { [s.textareaField]: props.type === 'textarea', [s.error]: error && touched })}

        onReset={handleReset}
        onSubmit={handleSubmit}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleLive}
        onDrop={handleDrop}
      >
        <h2>Перетащите файлы сюда</h2>
        <p>или</p>
        <label className={s.label}>
          <span>Загрузите файл</span>
          <input
            className={s.input}
            type="file"
            // multiple={true}
            accept="image/*,.png,.jpg,.gif,.web,"
            onChange={handleChange}
          />
        </label>
        {uploaded && (
          <>
          <div className={s.file_header}>Файл <span>{uploaded.fileName}</span> успешно загружен!</div>
          <div className={s.file_container}> 
            <img className={s.file_img} alt="" src={uploaded.url} width="200" />
          </div>
          </>
          
        )}
        
        {files.length > 0 && (
          <>
            <ul className={s.file_list}>
              {files.map(({ name }, id) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <button className={s.button_reset} type="reset">
              Отменить
            </button>
            <button className={s.button_submit} type="submit">
              Отправить
            </button>
          </>
        )}
      </form>
    </div>
  );
};

// Непомнящий

// function App() {
//   return (
//   <div className={s.app}
//     <UploadFile />
//   </div>
//   );
//   }

//   const hosrUrl = ‘/upload’;

//   export const UploadFile = () => {

//   const filePicker = useRef(null);

//   const [selectedFile, setSelectedFile] = useState(null);  // выбранный файл

//   const [uploaded, setUploaded] = useState(); // ответ от сервера

//   const handleChange = (e) => {

//   console.log(e.target.files);

//   setSelectedFile(e.target.files[0]) // сохранили в стэйт только первый файл (можно все)
//   }

//   const handleUpload = async () => {
//   if (!selectedFile) {
//   alert(“Please select a file”)
//   return;
//   }
//   const formData = new FormData();
//   formData.append(‘file’, selectedFile); // можно отправить любые данные, а не только файл по ключу (например file), который от нас ожидает сервер

//   const res = await fetch(hostUrl, {
//     method: ‘POST’,
//     body: formData,
//   });
//   const data = await res.json();

//   setUploaded(data);

//   }

//   const handlePick = () => {
//     filePicker.current.click();
//   } // воспроизводим клик на скрытый инпут, кликнув на кнопку

//   return (
//   <>
//   <button onClick={handlePick}>Pick file</button>

//   <input
//   className={s.hidden}
//   type = “file”
//   ref={filePicker}
//   onChange={handleChange}
//   multiple // несколько файлов
//   // accept= “image/*,.png,.jpg,.gif,.web,”
//   />

//   <button onClick={handleUpload}>Upload now!</button>

//   {selectedFile && (
//   <ul>
//   <li>Name: {selectedFile.name}</li>
//   <li>Type: {selectedFile.type}</li>
//   <li>Size: {selectedFile.size}</li>
//   <li>
//   lastModifiedDate: {“ “}
//   {selectedFile. lastModifiedDate.toLocaleDateString()}
//   </li>
//   </ul>
//   )}

//   {uploaded && (
//   <div>
//   <h2>{uploaded.filePath}</h2>
//   <img alt=’’ src={uploaded.filePath} width=”200” />
//   </div>
//   )}
//   </>
//   );
//   };

// export const Seasons = () => {
//   const [drag, setDrag] = useState(false);

//   const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setDrag(true);
//   };

//   const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setDrag(false);
//   };

//   const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const files = [...e.dataTransfer.files];
//     // console.log(files);
//     // отправка файлов на сервер

//     const formData = new FormData();
//     formData.append('file', files[0]);
//     // formData.append('userId', '1');
//     // axios.post('url', formData, options)

//     setDrag(false);
//   };

//   return (
//     <div className="container">
//       {drag ? (
//         <div
//           className={s.drop_area}
//           onDragStart={e => dragStartHandler(e)}
//           onDragLeave={e => dragLeaveHandler(e)}
//           onDragOver={e => dragStartHandler(e)}
//           onDrop={e => onDropHandler(e)}
//         >
//           Отпустите файлы чтобы загрузить
//         </div>
//       ) : (
//         <div
//           className={s.drop_area}
//           onDragStart={e => dragStartHandler(e)}
//           onDragLeave={e => dragLeaveHandler(e)}
//           onDragOver={e => dragStartHandler(e)}
//         >
//           Перетащите файлы, чтобы загрузить их
//         </div>
//       )}
//     </div>
//   );
// };
