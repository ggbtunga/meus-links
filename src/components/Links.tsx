import React from 'react'
import { useToast,Box } from '@chakra-ui/react'

const Links = () => {

    function copyUrl(text: string): void {
        navigator.clipboard.writeText(text)
          .then(() => {
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='green.500'>
                    Link Copied!
                  </Box>
                ),
              })
          })
          .catch((error) => {
            console.error('Erro ao copiar texto:', error);
          });
      };
      
      const toast = useToast();

    return (
        <div className='ease-in'>
            <div className='mb-2 p-2 text-white flex justify-evenly bg-slate-500 border-2 border-neutral-white rounded-lg'>
                <i className='bi bi-linkedin mr-2'></i>
                <span>linkedin.com/in/hick-tan</span>
                <i className="bi bi-clipboard ml-2 cursor-pointer transform active:translate-y-0.5 active:text-yellow-400" onClick={()=>copyUrl('https://www.linkedin.com/in/hick-tan/')}></i>
            </div>
            <div className='my-2 p-2 text-white flex justify-evenly bg-slate-500 border-2 border-neutral-white rounded-lg'>
                <i className="bi bi-github mr-2"></i>
                <span>github.com/ggbtunga</span>
                <i className="bi bi-clipboard ml-2 cursor-pointer transform active:translate-y-0.5 active:text-yellow-400" onClick={()=>copyUrl('https://github.com/ggbtunga')}></i>
            </div>
            <div className='my-2 p-2 text-white flex justify-evenly bg-slate-500 border-2 border-neutral-white rounded-lg'>
                <i className="bi bi-file-earmark-person-fill mr-2"></i>
                <span>meu-potifolio-three.vercel.app</span>
                <i className="bi bi-clipboard ml-2 cursor-pointer transform active:translate-y-0.5 active:text-yellow-400" onClick={()=>copyUrl('https://meu-potifolio-three.vercel.app')}></i>
            </div>
        </div>
    )
}

export default Links