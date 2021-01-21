import { useField, useFormikContext } from "formik";
import { useEffect } from "react";
import { Model } from "../database/getModels";
import useSWR from "swr";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectProps,
} from "@material-ui/core";

export interface ModelSelectProps extends SelectProps {
  name: string;
  models: Model[];
  make: string;
  initialMake: string;
}

export function ModelSelect({ initialMake, models, make, ...props }: ModelSelectProps) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({
    name: props.name
  });
  
  const initialModelsOrUndefined = make === initialMake ? models: undefined;

  const { data: newModels } = useSWR<Model[]>('/api/models?make=' + make, {
    dedupingInterval: 60000,
    initialData: make === 'all' ? [] : initialModelsOrUndefined 
  });

  useEffect(() => {
    if (!newModels?.map((a) => a.model).includes(field.value)) {
      setFieldValue('model', 'all')
    }
  }, [make, newModels]);

  return (
    <FormControl fullWidth variant='outlined'>
      <InputLabel id='search-model'>Model</InputLabel>
      <Select
        name='model'
        labelId='search-model'
        label='Model'
        {...field}
        {...props}
      >
        <MenuItem value='all'>
          <em>All Models</em>
        </MenuItem>
        {newModels?.map((model) => (
          <MenuItem key={model.model} value={model.model}>
            {`${model.model}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}