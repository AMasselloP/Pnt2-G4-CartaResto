import { supabase } from '../lib/supabase';

export const getProducts = async () => {
    try {
        console.log('Obteniendo productos...');

        const { data, error } = await supabase
            .from('Productos')
            .select('*');

        if (error) {
            console.error('❌ Error al obtener productos:', error);
            throw error;
        }

        console.log('✅ Productos cargados:', data?.length || 0, 'registros');
        return data || [];
    } catch (err) {
        console.error('❌ Error en getProducts:', err.message);
        return [];
    }
};

export const getProductsByCategory = async (category) => {
    console.log('🔍 getProdu ejecutándose...');
    console.log('📌 Buscando categoría:', category);
    
    try {
        const { data, error } = await supabase
            .from('Productos')
            .select('*')
            .eq('categoria', category);

        console.log('📊 Respuesta de Supabase:', { dataLength: data?.length, error });

        if (error) {
            console.error('❌ Error al obtener productos por categoría:', error);
            throw error;
        }

        console.log('✅ Productos obtenidos:', data?.length || 0);
        return data || [];
    } catch (err) {
        console.error('❌ Error en getProductsByCategory:', err.message);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('Productos')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error al obtener producto:', error);
            throw error;
        }

        return data;
    } catch (err) {
        console.error('Error:', err.message);
        return null;
    }
};
