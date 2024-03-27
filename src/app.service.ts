import { HfInference } from '@huggingface/inference';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async imgToText(imgURL: string): Promise<string>
  {
    const hf = new HfInference(process.env.HUGGING_FACE_TOKEN)

    const model = "Salesforce/blip-image-captioning-large"

    // const imgURL = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg";

    const response = await fetch(imgURL);
    const data = await response.blob();

    const result = await hf.imageToText({
      data,
      model,
    });

    return result.generated_text;
  }
}
