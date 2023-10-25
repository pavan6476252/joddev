import EditorJS, { OutputData } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage
};


const EDITTOR_HOLDER_ID = 'editorjs'

export default function Editor() {
    let ejInstance = useRef<EditorJS>();

    const [editorData, setEditorData] = useState<OutputData>();

    // This will run only once
    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
        return () => {
            if (ejInstance?.current && ejInstance?.current.destroy) {
                ejInstance?.current?.destroy();
            }
        }
    }, []);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: EDITTOR_HOLDER_ID,

            data: editorData,
            onReady: () => {
                ejInstance.current = editor;
            },
            onChange: async () => {
                const content = await this.saver.save()
                console.log("data : ", content)
                setEditorData(content);
            },

            hideToolbar: false,

            tools: EDITOR_JS_TOOLS,

            placeholder: 'Let`s write an awesome story!'
        });
    };

    return (

        <div className='prose max-w-full' id={EDITTOR_HOLDER_ID}></div>

    );

}

