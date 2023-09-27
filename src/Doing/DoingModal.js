import { Button, Modal, Space, TextInput } from '@mantine/core'
import React, { useCallback, useState } from 'react'

const DoingModal = ({ opened, close, doingList, setDoingList }) => {
    const [urlText, setUrlText] = useState('');
    const [name, setName] = useState('');

    const onClickHandler = useCallback(() => {
        const cur = {
            id:doingList.length+1,
            createdAt: new Date(),
            name: name,
            url: urlText,
            attachments: parseInt((Math.random()*100) % 99),
        }

        // Post API here

        setDoingList([cur, ...doingList]);
        close();
    }, [urlText, name, setDoingList, doingList])

    return (
        <Modal opened={opened} onClose={close} size="30vw" title="Add Resource Modal">
            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder='Provide a Name for this resource' />
            <Space h={'2vh'} />
            <TextInput value={urlText} onChange={(e) => setUrlText(e.target.value)} placeholder='Provide a image url for this resource' />
            <Space h={'2vh'} />
            <div className='flex justify-end'>
                <Button onClick={onClickHandler}>Add Resource</Button>
            </div>
        </Modal>
    )
}

export default DoingModal